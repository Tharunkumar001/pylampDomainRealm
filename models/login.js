import mongoose from 'mongoose'

const LoginSchema = new mongoose.Schema({
    UserName: String,
    RollNo: String,
    Email: String,
    Password: String,
})

mongoose.models = {};

var Login = mongoose.model('Login', LoginSchema);

export default Login;