var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: `smtp.dreamhost.com`,
    port: `465`,
    secure: true,
    auth: {
        user: `agent@beesite.geeklone.com`,
        pass: `beesite+-**1`
    }
});


exports.mail = function(mailOptions) {

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });


}