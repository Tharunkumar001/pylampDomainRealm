// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../middleware/mongodb";
import Login from "../../models/login";
import nodemailer from "nodemailer";

const GrievenceHandler = async(req, res)=> {
    console.log(req.body)
    if(req.method === "PUT"){
                    var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                    user: 'officialpylampvcet@gmail.com',
                    pass: 'rlpvmdxocdjgvidm'
                    }
                });

                var mailOptions = {
                    from: 'officialpylampvcet@gmail.com',
                    to: 'tharung1411@gmail.com',
                    subject: 'Submit Grievence',
                    text: `${req.body.data.grievence}
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
    }

export default connectDB(GrievenceHandler);