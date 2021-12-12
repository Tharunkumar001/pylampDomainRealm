import User from "./Models/UserDetails";

const formData = (req,res) => {
    res.status(200).json({name: "tharun"});
}

export default formData;