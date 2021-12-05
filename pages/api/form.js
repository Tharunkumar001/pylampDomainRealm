// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "./dbConnect";
import User from "./Models/UserDetails";

const  handler = async(req, res) => {
  console.log(req.body)
  // const userData  = new User({
  //   name: req.body.name,
  //   rollNo: req.body.rollNo,
  //   class: req.body.class
  // })

  // userData.save();
}

export default dbConnect(handler);