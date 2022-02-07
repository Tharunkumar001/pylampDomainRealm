// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../middleware/mongodb";
import Login from "../../models/login";
import nodemailer from "nodemailer";

const ForgotPassword = async(req, res)=> {
    if(req.method === "POST"){
        var findUser = await Login.find({RollNo: req.body.data.rollNo});

        if(findUser.length == 0){
            res.status(401).send({auth: false, message: "You Dont Have A Account!!"})
        }else{
            var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                    user: 'officialpylampvcet@gmail.com',
                    pass: 'rlpvmdxocdjgvidm'
                    }
                });

                var mailOptions = {
                    from: 'officialpylampvcet@gmail.com',
                    to: `${req.body.data.email}`,
                    subject: 'Password Recovery',
                    text: `Dear ${req.body.data.rollNo} you recently requested for a password reset from Pylamp website. You can get your Password below and login into your account easily.

Password: ${findUser[0].Password}

If it wasn't you who requested for a forgot password, or acidentally made a request, ignore this email.

Happy Coding!
Team Pylamp🤩
                    `
                };

                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        console.log(error);
                        res.status(401).send({message: "Something Went Wrong"});
                    } else {
                        console.log('Email sent: ' + info.response);
                        res.status(200).send({message: "Mail Sent Successfully"});
                    }
                });
        }
    }else if(req.method === 'PUT'){
        
    }else if(req.method === 'GET'){
        
    }}

export default connectDB(ForgotPassword);