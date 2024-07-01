const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { registerUser } = require('./controllers/userController');
const { loginUser } = require('./controllers/authController');
const { hashUrl, redirectUrl } = require('./controllers/urlcontrollers');
const authenticate = require('./middleware/auth');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/register', registerUser);
app.post('/login', loginUser);
app.post('/hash', authenticate, hashUrl);
app.get('/:hash', redirectUrl);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
