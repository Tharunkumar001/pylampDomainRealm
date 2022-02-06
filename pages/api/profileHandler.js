// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../middleware/mongodb";
import Login from "../../models/login";
import jwt from "jsonwebtoken";

const profileHandler = async(req, res)=> {
    if(req.method === "POST"){
        const findUser = await Login.find({RollNo: req.body.loginDetails.rollNo});
        console.log(findUser);
        if(findUser.length == 0){
            const profile = await new Login({
                UserName: req.body.loginDetails.userName,
                RollNo: req.body.loginDetails.rollNo,
                Email: req.body.loginDetails.email,
                Password: req.body.loginDetails.password,
            });
            profile.save();

            if(req.body.loginDetails.rememberMe){
                let token = jwt.sign({rollNo: req.body.loginDetails.rollNo}, process.env.TOKEN_SECRET,{ expiresIn: '8760hr' })
                res.send(token);
            }else{
                res.status(200).send("User Added");
            }

        }else{
            const checkPassword = ((findUser.password == req.body.loginDetails.password))? true: false;
            console.log(checkPassword);
        }
        
    }
    else if(req.method === "PUT"){
        
    }
    else if(req.method == "GET"){
        var token = req.body.jwt;
        console.log(token);

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });


        const foundUser = Login.findOne({ RollNo: decoded.rollNo }).then((result) => {
            console.log(result);
            // res.send(result.email)
        })

    })

    }
}

export default connectDB(profileHandler);