import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d19413c343a006",
      pass: "7372a37b835e63"
    }
  });


export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject , body}: SendMailData) {
    await transport.sendMail({
        from: 'equipe Feedget <oi@feedget.com>',
        to: 'Luis Felipe <lipinhoraw@gmail.com>',
        subject,
        html: body,
    })

    };
}