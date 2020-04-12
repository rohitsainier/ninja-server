const nodemailer = require('nodemailer');


let transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
       user: 'xxxxxxx',
       pass: '*******'
    }
});
 
const message = {
    from: 'xxxxxxxxx@gmail.com', // Sender address
    to: 'xxxxxxxxxxx@gmail.com',         // List of recipients
    subject: 'Design Your Model S | Tesla', // Subject line
    text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
};
const sendMessage = transport.sendMail(message, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  module.exports = {
      send: sendMessage
  }
  
