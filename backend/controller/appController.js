const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

/** send mail from testing account */
// const signup = async (req, res) => {

//     /** testing account */
//     let testAccount = await nodemailer.createTestAccount();

//       // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//             user: testAccount.user, // generated ethereal user
//             pass: testAccount.pass, // generated ethereal password
//         },
//     });

//     let message = {
//         from: '"Fred Foo 👻" <foo@example.com>', // sender address
//         to: "bar@example.com, baz@example.com", // list of receivers
//         subject: "Hello ✔", // Subject line
//         text: "Successfully Register with us.", // plain text body
//         html: "<b>Successfully Register with us.</b>", // html body
//       }


//     transporter.sendMail(message).then((info) => {
//         return res.status(201)
//         .json({ 
//             msg: "you should receive an email",
//             info : info.messageId,
//             preview: nodemailer.getTestMessageUrl(info)
//         })
//     }).catch(error => {
//         return res.status(500).json({ error })
//     })

//     // res.status(201).json("Signup Successfully...!");
// }

/** send mail from real gmail account */
const signup = (req, res) => {

    const { message } = req.body;

    let config = {
        service : 'gmail',
        auth : {
            user: "msskumargaddam@gmail.com",
            pass: "eaqt acwq mqpt cdmp"
        }
    }

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "default",
        product : {
            name: "AgriConnect",
            link : 'https://agriconnect.com/'
        }
    })

    let response = {
        body: {
            name : message.to, // Using recipient's email as name for simplicity
            intro: "Congratulations! You have successfully registered with AgriConnect.",
            outro: "Thank you for joining AgriConnect. We look forward to supporting your journey with us."
        }
    }

    let mail = MailGenerator.generate(response);

    let messagee = {
        from : "msskumargaddam@gmail.com",
        to : message.to,
        subject: "Successfully Registered with AgriConnect",
        html: mail
    }

    transporter.sendMail(messagee).then(() => {
        return res.status(201).json({
            msg: "You should receive an email shortly."
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })
}



module.exports = {
    signup,
}