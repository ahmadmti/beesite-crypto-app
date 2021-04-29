var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: `pizzareborn.geeklone.com`,
    port: `465`,
    secure: `ssl`,
    auth: {
        user: `pizzareborn`,
        pass: `j-3pLGT4`
    }
});

// var mailOptions = {
//     from: 'hi@gmail.com',
//     to: 'ru03244523131@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
// };

exports.sendMail = function(mailOptions) {

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });


}