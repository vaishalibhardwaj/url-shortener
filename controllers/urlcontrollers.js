const Url = require('../models/urls');
const crypto = require('crypto');

const generateUniqueHash = async (originalUrl) => {
  let hash;
  let url;

  do {
    hash = crypto.createHash('md5').update(originalUrl + Date.now().toString()).digest('hex').slice(0, 6);
    url = await Url.findOne({ hash });
  } while (url);

  return hash;
};

const hashUrl = async (req, res) => {
  const { originalUrl, usageLimit } = req.body;

  if (!originalUrl) {
    return res.status(400).json({ error: 'Original URL is required' });
  }

  try {
    const hash = await generateUniqueHash(originalUrl);
    const newUrl = new Url({
      originalUrl,
      hash,
      usageLimit: usageLimit || Infinity,
      clicks: 0,
      userId: req.user.userId, // Save userId
    });

    await newUrl.save();
    const shortenedUrl = `${req.protocol}://${req.get('host')}/${hash}`;
    res.json({ hash, originalUrl, shortenedUrl });
  } catch (error) {
    res.status(500).json({ error: 'Could not hash URL' });
  }
};

const redirectUrl = async (req, res) => {
  const { hash } = req.params;

  try {
    const url = await Url.findOne({ hash });

    if (url) {
      if (url.usageLimit > 0 && url.clicks >= url.usageLimit) {
        return res.status(403).json({ error: 'URL usage limit reached' });
      }

      url.clicks += 1;
      await url.save();
      res.redirect(url.originalUrl);
    } else {
      res.status(404).json({ error: 'URL not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Could not redirect URL' });
  }
};

module.exports = { hashUrl, redirectUrl };
