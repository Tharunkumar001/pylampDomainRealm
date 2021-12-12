import User from "./Models/UserDetails";
import dbConnect from "./dbConnect";
import { connectToDatabase } from "../../util/mongodb";

const formData = async(req,res) => {
    const { db } = await connectToDatabase();

    // const formData = await db
    // .collection("users")
    // .find({rollNo: req.body.rollNo})
    // .sort({ metacritic: -1 })
    // .limit(20)
    // .toArray();

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

export default formData;