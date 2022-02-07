// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../middleware/mongodb";
import Login from "../../models/login";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const profileHandler = async(req, res)=> {
    if(req.method === "POST"){
        const findUser = await Login.find({RollNo: req.body.loginDetails.rollNo});
        if(findUser.length == 0){
            const profile = await new Login({
                UserName: req.body.loginDetails.userName,
                RollNo: req.body.loginDetails.rollNo,
                Email: req.body.loginDetails.email,
                Password: req.body.loginDetails.password,
            });
            profile.save();

            let token = jwt.sign({ RollNo: req.body.loginDetails.rollNo }, process.env.TOKEN_SECRET, { expiresIn: '8760hr' });
            res.status(201).send({jwt:token, message:"NEW USER"});
        }else{
            let token = jwt.sign({ RollNo: req.body.loginDetails.rollNo }, process.env.TOKEN_SECRET, { expiresIn: '8760hr' });
            res.status(202).send({userData: findUser, jwt: token});
        }
        
    }
    else if(req.method == "PUT"){
        var token = req.body.jwt;

        if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

        jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
            if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

            const foundUser = Login.findOne({ RollNo: decoded.RollNo }).then((result) => {
                res.status(200).send({auth: true, user: result.RollNo});
            })
        })
    }
}

export default connectDB(profileHandler);