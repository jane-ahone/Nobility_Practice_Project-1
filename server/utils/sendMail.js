const nodemailer = require('nodemailer')


const sendMail = async ({from,to,subject,text}) => {
    const transport = nodemailer.createTransport({
        host:process.env.EMAIL_HOST,
        port:process.env.EMAIL_PORT,
        auth: {
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        }
    })
    
    const options = {
        from,
        to,
        subject,
        text,
    }
    
    await transport.sendMail(options)
}

module.exports = sendMail