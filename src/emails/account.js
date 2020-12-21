const sgMail = require('@sendgrid/mail')


// sgMail.setApiKey(sendgridAPIKey)
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to: 'siamakapi@gmail.com',
//     from: 'siamakapi@gmail.com',
//     subject: ' This is my first creation',
//     text: 'I hope this will one actually get to you.'
// })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'siamakapi@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name} Let me know how you get along with the app.`
    })
}

const sendGoodbyEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'siamakapi@gmail.com',
        subject: 'Goodby, bastard!',
        text: `${name}!, Before getting lost, tell us about your fucking reasons for not staying with us!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyEmail
}