// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../middleware/mongodb";
import User from "../../models/user";

const handler = (req, res)=> {
  if(req.method === "GET"){
    const getValue = User.find({}).then((done) => {
      res.status(200).send(done);
    })
  }else{
    res.send("post");
  }
}

export default connectDB(handler);

