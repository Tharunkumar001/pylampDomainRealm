import mongoose from 'mongoose'

const DefaultSchema = new mongoose.Schema({
    eventName: String,
    period: String,
    about: String,
    exactDate: String,
    formType: String
})

mongoose.models = {};

var Default = mongoose.model('Default', DefaultSchema);

export default Default;