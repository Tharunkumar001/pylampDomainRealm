
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../middleware/mongodb";
import User from "../../models/user";
import dotenv from "dotenv";
dotenv.config();

const handler = async(req, res)=> {
    if(req.method === "PUT"){
        const userData  = await User.find({eventId: req.body.eventId});
        
        if(userData.length !== 0){
            res.status(200).send(userData);
        }else{
            res.status(200).send(false);
        }
    }else if(req.method === "POST"){
        if(req.body.promtValue === 'Pylamp@vcet'){
            res.send(true)
        }else{
            res.send(false)
        }
    }}

export default connectDB(handler);