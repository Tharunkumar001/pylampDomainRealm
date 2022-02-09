import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: String,
    rollNo: String,
    class: String,
    eventName: String,
    formType: String,
    eventId: String,
    eventDate: String,
})

mongoose.models = {};

var User = mongoose.model('User', UserSchema);

export default User;