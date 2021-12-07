import User from "./Models/UserDetails";

const getUserData = (req,res) => {
    const userData  = User.find({}).then((data) => {
        
        res.status(200).send(data);
    })
}

export default getUserData;