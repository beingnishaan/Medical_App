const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AppointmentSchema = new Schema({
    name:{
        type : String,
        required : true
    },
    phone:{
        type : String,
        required : true
    },
    bookAt:{
        type : String,
        required : true
    },
    specialist: {
        type: Schema.Types.ObjectId,
        ref: "category"
    },
    messege:{
        type:String,
        required:true,
    },
    status:{
        type : Boolean,
        default : true
    },
    createAt:{
        type : Date,
        default :Date.now
    }
})

const appointmentModel = new mongoose.model('appointment' , AppointmentSchema)

module.exports=appointmentModel