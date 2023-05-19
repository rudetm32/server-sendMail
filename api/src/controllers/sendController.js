import nodemailer from "nodemailer";
import emailvalidator from"email-validator";
import  *  as  dotenv  from  'dotenv';
import ejs from "ejs";
import fs from "fs"

dotenv.config()

const { 
    EMAIL_ADRESS, 
    EMAIL_PASSWORD 
} = process.env


export const postNotify = ( req, res ) => {
    const { email, adress, name, option  } = req.body;
    let template = fs.readFileSync(`./views/base.ejs`, 'utf8');
    let messageHtml;
    let subject;
    let body;
    let title;
        
    try {
        if( !email ) return res.status(409).json("Debe ingresar un correo electrónico")
        if( !emailvalidator.validate(email) ) return res.status(409).json("Ingrese un correo electrónico en formato válido")
        if( !name) return res.status(409).json('Debe ingresar un nombre')
        
        if(name && email && adress){
            title = "Bienvenido(a)"
            subject = "Registro exitoso";
            body = 'Gracias por registrarte en nuestra Web';
            template; 
            messageHtml = ejs.render(template, {
                name,
                body,
                title
            });    
        }
        if( !adress ) {
            title = "Le informamos,"
            subject = "Fallo al registrar"
            body = "No fue posible realizar su registro. Por favor revise su información."
            template; 
            messageHtml = ejs.render(template, {
                name,
                body,
                title
            })
        }
        if( option === "pago") {
            title = "Estimado(a),"
            subject = "Pago Realizado"
            body= `Agradecemos su pronto pago y lo invitamos a seguir disfrutando nuestros  servicios.`
            template;
            messageHtml = ejs.render(template, {
                name,
                body,
                title
            });    
        }
        if( option === "pendiente"){
            title = "Estimado(a),"
            subject = "Pago pendiente"
            body= `No hemos recibido su pago. Puede realizarlo por medio de los canales que ponemos a sus órdenes.`
            template; 
            messageHtml = ejs.render(template, {
                name,
                body,
                title
            });
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
            if (error) return  res.status(404).json({ message : error }, info.response );
            else {
                res.status(200).json({ message: "Se envió una notificación al correo electrónico ingresado."  });
            }
        });    
    } catch (error) {
        res.status(400).json({mensaje: error.message});
    }
};
