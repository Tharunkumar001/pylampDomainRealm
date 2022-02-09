// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../middleware/mongodb";
import User from "../../models/user";

const handler = async(req, res)=> {
  if(req.method === "POST"){
    const api = await User.find({eventName: req.body.eventName, rollNo: req.body.rollNo});
    
    if(api.length == 0){
      const createUser = new User({
        name: req.body.name,
        class: req.body.class,
        rollNo: req.body.rollNo,
        eventId: req.body.eventId,
        eventName: req.body.eventName,
        formType: req.body.formType,
        eventDate: req.body.eventDate,
      });
      createUser.save();
      res.status(200).send("Successfully User Attendance Marked");
    }else{
      res.send(false);
    }
  }else if(req.method === 'PUT'){
      User.deleteOne({rollNo: req.body.roll}).then((done) => {
        res.send(true);
      })
  }else if(req.method === 'GET'){
    console.log(req.body.eventId)
    const userData  = await User.find({eventId: "61d9848f2effd2e52c8e67c7"})
    console.log(userData);
  }}

export default connectDB(handler);