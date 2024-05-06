let email = require('../helpers/email');
let dotenv = require('dotenv').config();

function post(req, res) {
  if (
    req.body.firstName == undefined ||
    req.body.lastName == undefined ||
    req.body.from_email == undefined ||
    req.body.subject == undefined ||
    req.body.body == undefined
  ) {
    res.status(400).json({ msg: 'invalid request' });
    return;
  }
  email.sendEmail(
    req.body.firstName,
    req.body.lastName,
    req.body.from_email,
    req.body.subject,
    req.body.body
  );
  res.status(200).json({ message: 'E-mail sent successfully.' });
}

module.exports = {
  post: post,
};