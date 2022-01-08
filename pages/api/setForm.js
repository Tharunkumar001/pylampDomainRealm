// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../middleware/mongodb";
import User from "../../models/user";
import Default from "../../models/form";

const handler = (req, res)=> {
    if(req.method === "POST"){
        const defaultForm = new Default({
            eventName: req.body.eventDetails.header,
            period: req.body.eventDetails.period,
            about: req.body.eventDetails.about,
            exactDate: new Date().toString(),
        });

        defaultForm.save();
    }}

export default connectDB(handler);