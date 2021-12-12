// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../middleware/mongodb";
import User from "../../models/user";

const handler = (req, res)=> {
  if(req.method === "POST"){
    
      const validate = User.findOne({rollNo: req.body.rollNo}).then((done) => {
          if(done == null){
              const userData  = new User({
                  name: req.body.name,
                  rollNo: req.body.rollNo,
                  class: req.body.class
              })
              userData.save();
      
              res.status(200).send("your attendace marked succesffully");
              }
              else
              {
              res.send(false);
              }
          });
  }else{
    res.send("post");
  }}

export default connectDB(handler);