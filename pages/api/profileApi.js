// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Default from "../../models/form";
import connectDB from "../../middleware/mongodb";
import User from "../../models/user";
import Login from "../../models/login";
import { ExpandLessSharp } from "@material-ui/icons";

const profile = async(req, res)=> {
    if(req.method === "POST"){
        const findUser = User.find({rollNo: req.body.rollNo}).then((data)=>{
            if(data.lenght == 0){
                res.status(401).send({info: false, message: "No More Events You Participated"});
                
            }else{
                const findUser = Login.find({RollNo: req.body.rollNo}).then((done)=>{
                    res.status(200).send({userDetails: done, tableData: data});
                })
            }
        })
    }
    else if(req.method === "PUT"){
        const findUser = Login.find({RollNo: req.body.rollNo}).then((data)=>{
            res.status(200).send(data);
        })
    }
    else if(req.method == "GET"){
        const getEvents = Default.find({}).then((data) => {
            res.status(200).send(data.length);
        })
    }
}

export default connectDB(profile);