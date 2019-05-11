const nodemailer = require('nodemailer');

module.exports = {
  sendQuote: (req,res) => {
    const { client, quote } = req.body;
    const { EMAIL, PASS } = process.env;
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: `${EMAIL}`,
        pass: `${PASS}`
      }
    })
    const mailOptions = {
      from: `${EMAIL}`,
      to: `${EMAIL}`,
      subject: `Quote request from ${client}`,
      text: quote,
      html: `<p>Here is a quote request. ${quote}</p>`
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error)
      }
      console.log('Message successfully sent!!!!!!!')
      res.send(info.response)
    })
  }
}