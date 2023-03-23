const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // status: {
    //     type: Boolean,
    //     default: true
    // },
    isAdmin: {
        type: Boolean,
        default: false
    },
})

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;