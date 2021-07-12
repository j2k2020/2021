const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "",
        pass: ""
    }
};


const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error){
            console.log(info);
        }else {
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from: 'j2k2020@naver.com',
    to: 'j2k2020@naver.com',
    subject: 'nodemailer테스트 메일입니다.',
    text: '메일이 정상적으로 발송 되었습니다.'
}

send(email_data);
