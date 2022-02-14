// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Default from "../../models/form";
import connectDB from "../../middleware/mongodb";
import User from "../../models/user";
import Login from "../../models/login";

const profile = async(req, res)=> {
    if(req.method === "POST"){
        var array;
        const findUserParticipations = User.find({rollNo: req.body.rollNo}).then((data)=>{
            if(data.lenght == 0){
                res.status(401).send({info: false, message: "No More Events You Participated"});
            }
        })
        
    }
    else if(req.method === "GET"){
        const EventDetails = Default.find({}).then((data)=>{
            res.status(200).send(data.length);
        })
    }
    else if(req.method == "PUT"){
        const findUserDet = Login.find({RollNo: req.body.rollNo}).then((done) => {
            res.status(200).send({active: data, details: done});
        })
    }
}

export default connectDB(profile);