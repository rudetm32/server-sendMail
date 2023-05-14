import dotenv from 'dotenv';
import { createTransport } from 'nodemailer';


dotenv.config


export const getSendEmail = async( req, res )=>{
    const { email } = req.body
    try {
        res.render("pagos")
    } catch (error) {
        res.status(400).json({mensaje: error.message})   
    }
}
// import { createTransport } from "nodemailer";



// const { EMAIL_ADRESS, EMAIL_PASSWORD } =  process.env;



// export  async function postSendMail(req, res) { 
//     const { email, subject } = req.body; 
//     try {
//         if ( !email || !subject ) {
//             //   res.send("ingrese datos")
//         // const testAccount = await nodemailer.createTestAccount();
//         res.render("unregisteredUser")
//         }
//         else{
//          let template;
//          switch (subject) {
//             case subject:"welcome"
//             template = await renderFile(`${__dirname}/views/welcome.ejs`, {
//                 subject,
//                 email,
//             })
//             case subject:"payment"
//             template = await renderFile(`${__dirname}/views/payment.ejs`, {
//                 subject,
//                 email,
//             })
//             case subject:"pendingPayment"
//             template = await renderFile(`${__dirname}/views/pendingPayment.ejs`, {
//                 subject,
//                 email,
//             })
//             default:
//                  // renderFile(`${__dirname}/views/unregisteredUser.ejs`)
// }
//     //   if (subject === "welcome") {
//     //     // console.log("in register template");
//     //     template = await ejs.renderFile(`${__dirname}/views/welcome.ejs`, {
//     //       subject,
//     //       email,
//     //     })
//     //     // console.log(template)
//     //   }
//     // //   if (type === "pay") {
//     //     template = await ejs.renderFile(__dirname + "/views/pay.ejs", {
//     //       subject,
//     //       email,
//     //       message,
//     //       greeting,
//     //     });
//     //   }

//       let transporter = createTransport({
//         service: "gmail",
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//         //     user:"bastet1872@gmail.com",
//         //     pass:"ncbofyahljlunxtp"
//            user: EMAIL_ADRESS, // generated user
//            pass: EMAIL_PASSWORD // generated password
//         },
//       });

//       let mailOptions = {
//         from: "bastet1872@gmail.com",
//         to: email,
//         subject,
//         html: template,
//       };
//       transporter.verify(async function (error, success) {
//         if (error) 
//         console.log("Server is ready", success);
//       });
//       transporter.sendMail(mailOptions, function (error, info) {
//         if (error) res.status(404).json({ message: error });
//         else {
//           // console.log("---transporter: ---> ", transporter)
//           // console.log("---sendMail info: ---> ", info)
//           // // console.log(nodemailer.getTestMessageUrl(info))
//           res.status(200).json({ message: "Email enviado con éxito" });
//         }
//       });
//     }    
//   } catch (error) {
//     res.status(500).json({  error });
//   }
// }


