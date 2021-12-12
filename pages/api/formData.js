// // import User from "./Models/UserDetails";
// // import dbConnect from "./dbConnect";

// // const formData = async(req,res) => {
// //     // const {db} = await dbConnect();
// //     // res.status(200).json({name: "tharun"});
// //     const validate = User.findOne({rollNo: req.body.rollNo}).then((done) => {
// //         if(done == null){
// //             const userData  = new User({
// //                 name: req.body.name,
// //                 rollNo: req.body.rollNo,
// //                 class: req.body.class
// //             })
// //             userData.save();
    
// //             res.status(200).send("your attendace marked succesffully");
// //             }
// //             else
// //             {
// //             res.send(false);
// //             }
// //         });
// // }

// // export default formData;

// const { connectToDatabase } = require("./dbConnect");
// const ObjectId = require('mongodb').ObjectId;

// export default async function handler(req, res) {
//     // switch the methods
//     switch (req.method) {
//         case 'GET': {
//             return getPosts(req, res);
//         }

//         case 'POST': {
//             return addPost(req, res);
//         }

//         case 'PUT': {
//             return updatePost(req, res);
//         }

//         case 'DELETE': {
//             return deletePost(req, res);
//         }
//     }
// }

// async function getPosts(req,res){
//     try {
//         // connect to the database
//         let { db } = await connectToDatabase();
//         // fetch the posts
//         let posts = await db
//             .collection('myFirstDatabase')
//             .find({})
//             .sort({ published: -1 })
//             .toArray();
//         // return the posts
//         return res.json({
//             message: JSON.parse(JSON.stringify(posts)),
//             success: true,
//         });
//     } catch (error) {
//         // return the error
//         return res.json({
//             message: new Error(error).message,
//             success: false,
//         });
//     }
// }