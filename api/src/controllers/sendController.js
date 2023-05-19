import nodemailer from "nodemailer";
import emailvalidator from"email-validator";
import  *  as  dotenv  from  'dotenv';
import ejs from "ejs";
import fs from "fs"


dotenv.config()

const { EMAIL_ADRESS, EMAIL_PASSWORD } = process.env


export const postWelcome = ( req, res ) => {
    const { email, adress , name  } = req.body;
    let template;
    let messageHtml;
    let subject;
        
    try {
        if( !email ) return res.status(409).json("Debe ingresar un correo electrónico")
        if( !emailvalidator.validate(email) ) return res.status(409).json("Ingrese un correo electrónico en formato válido")
        if( !name) return res.status(409).json('Debe ingresar un nombre')
        
        if(name && email && adress){
            subject = "Welcome"
            template = fs.readFileSync(`./views/welcome.ejs`, 'utf8'); 
            messageHtml = ejs.render(template, {
                email,
                name
            });    
        }
        if(!adress){
            subject = "Registro no exitoso"
            template = fs.readFileSync(`./views/unregisteredUser.ejs`, 'utf8'); 
            messageHtml = ejs.render(template)
        }
        const transporter =  nodemailer.createTransport({
            service : "gmail",
            host : "smtp.gmail.com",
            auth : {
                user : EMAIL_ADRESS,
                pass : EMAIL_PASSWORD 
            },
        });
        const mailOption = {
            from : "bastet1872@gmail.com",
            to : email,
            subject : subject,
            html : messageHtml,
        };
        transporter.sendMail(mailOption, function (error, info) {
            if (error) return  res.status(404).json({ message: error, info });
            else {
                res.status(200).json({ message: "Se envió una notificación al correo electrónico ingresado"  });
            }
        });    
    } catch (error) {
        res.status(400).json({mensaje: error.message});
    }
};
