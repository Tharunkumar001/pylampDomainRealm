// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Default from "../../models/form";
import connectDB from "../../middleware/mongodb";
import Login from "../../models/login";

const formHandler = async(req, res)=> {
    if(req.method === "POST"){
        Login.deleteOne({ "RollNo": req.body.rollNo }).then((done) => {
            res.send(true)
        })
    }
    else if(req.method === "PUT"){
    
    }
    else if(req.method == "GET"){

    }
}

export default connectDB(formHandler);