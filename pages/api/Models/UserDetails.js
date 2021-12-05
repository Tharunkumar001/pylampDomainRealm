import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: String,
    rollNo: String,
    class: String
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)