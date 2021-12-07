// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "./dbConnect";
import getUserData from "./getUserData";
import User from "./Models/UserDetails";

const  handler = async(req, res) => {

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
}

export default dbConnect(handler);