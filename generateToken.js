const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = () => {
  const payload = {
    userId: 'testUser', // replace with what you want
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  console.log('Generated JWT Token:', token);
};

generateToken();
