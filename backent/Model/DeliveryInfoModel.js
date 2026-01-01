import e from "express";
import mongoose from "mongoose";

const DeliveryInfoSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    street:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },

    zipCode:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true  
    },


})

export default mongoose.model("DeliveryInfo", DeliveryInfoSchema);