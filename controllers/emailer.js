const nodemailer = require('nodemailer');

module.exports = {
  sendQuote: (req,res) => {
    const { 
      firstName,
      lastName,
      email,
      companyName,
      industry,
      siteType,
      budget,
      timeFrame,
      hasDomain,
      needsHosted 
    } = req.body;
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
      subject: `Quote request from ${firstName} ${lastName}`,
      text: 'quote',
      html: 
        `<h1>${companyName}</h1>
        <h1>${industry}</h1>
        <h1>${siteType}</h1>
        <h1>${budget}</h1>
        <h1>${timeFrame}</h1>
        <h1>${hasDomain}</h1>
        <h1>${needsHosted}</h1>
        <h1>${email}</h1>`
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