import mongoose from "mongoose";

const ProductSchema =new mongoose.Schema({
     
    name:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
     },

    price:{
        type: Number,
        required: true
     },

    image:[{
        type: String,
        required: true
    }],

    category:{
        type: String,
        required: true
    },

    subCategory:{
        type: String,
        required: true
    },

    sizes:{
        type: [String],
        required: true
    },
    date:{
        type: Date,
        default: Date.now

    },
    
    bestseller:{
        type: Boolean,
        default: false
    }
})

const Product = mongoose.model("Product", ProductSchema);
export default Product;