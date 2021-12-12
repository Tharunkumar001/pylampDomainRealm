import User from "./Models/UserDetails";
import dbConnect from "./dbConnect";

const formData = async(req,res) => {
    const {db} = await dbConnect();
    res.status(200).json({name: "tharun"});
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