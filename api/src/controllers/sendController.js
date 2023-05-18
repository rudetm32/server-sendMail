import nodemailer from "nodemailer"
import emailvalidator from"email-validator"
import  *  as  dotenv  from  'dotenv';

dotenv.config()

const { EMAIL_ADRESS, EMAIL_PASSWORD } = process.env


export const getSendEmail = ( req, res ) => {
     const { email } = req.body 
    try {
        if(!email) return res.status(409).json("debe ingresar un correo")
        if (!emailvalidator.validate(email)) return res.status(409).json("ingrese un email valido")
        else {
            const transporter = nodemailer.createTransport({
                service:"gmail",
                host: "smtp.gmail.com",
                auth: {
                    user: EMAIL_ADRESS,
                    pass: EMAIL_PASSWORD 
                },
            });
            const mailOption = {
                from: "bastet1872@gmail.com",
                to: email,
                subject:"",
                html:'<h1>Prueba nodemailer</h1>',
            };
            transporter.sendMail(mailOption, function (error, info) {
                if (error) return  res.status(404).json({ message: error, info });
                else {
                    res.status(200).json({ message: "Email enviado con éxito" });
                }
            });
        }
    } catch (error) {
        res.status(400).json({mensaje: error.message});
    }
};

//          let template;
//          switch (subject) {
//             case subject:"welcome"
//             template = await renderFile(`${__dirname}/views/welcome.ejs`, {
//                 subject,
//                 email,
