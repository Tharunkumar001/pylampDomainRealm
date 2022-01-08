// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../middleware/mongodb";
import Default from "../../models/form";

const handler = async (req, res)=> {
    if(req.method === "POST"){
        const defaultForm = await new Default({
            eventName: req.body.eventDetails.header,
            period: req.body.eventDetails.period,
            about: req.body.eventDetails.about,
            exactDate: new Date().toString(),
        });

        defaultForm.save();

        res.status(200).send("form collection created");
    }else{
        console.log("other method")
    }}

export default connectDB(handler);