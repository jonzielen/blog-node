var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var express = require('express');
var router = express.Router();

/* load email form */
router.get('/', function(req, res, next) {
    res.render('email-form', {
        title: 'Send Email',
        pageDescription: 'Send email'
    });
}).post('/', function(req, res, next) {

    var transporter = nodemailer.createTransport(smtpTransport({
        // works at work
        //host: 'mail.nycvb.nycvisit.com',
        //port: 25,

        // should be default fall back
        service: 'gmail',
        auth: {
            user: 'jonzielendevtests',
            pass: '#America'
        },
        port: 465,

        tls: {rejectUnauthorized: false},
        debug: true
    }));

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: req.body.from, // sender address
        to: req.body.to, // list of receivers
        subject: req.body.title, // Subject line
        //text: 'Hello world', // plaintext body
        html: req.body.body // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('info.response: ' + info.response);

    });

    res.render('email-form-success', {
        title: 'Email Sent',
        pageDescription: 'Email sent',
        to: req.body.to
    });
});

module.exports = router;
