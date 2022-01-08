import mongoose from 'mongoose'

const DefaultSchema = new mongoose.Schema({
    eventName: String,
    period: String,
    about: String,
    exactDate: String,
})

mongoose.models = {};

var Default = mongoose.model('Default', DefaultSchema);

export default Default;