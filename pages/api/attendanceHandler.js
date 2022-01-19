
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../middleware/mongodb";
import User from "../../models/user";

const handler = async(req, res)=> {
    if(req.method === "PUT"){
        const userData  = await User.find({eventId: req.body.eventId});
        
        if(userData.length !== 0){
            res.status(200).send(userData);
        }else{
            res.status(200).send(false);
        }
    }}

export default connectDB(handler);