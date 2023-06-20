// let mongoose = require("mongoose");
import mongoose from "mongoose";
// let mongoose = mongoose;
let productSchema = new mongoose.Schema({
    item: {
        type: String,
    },
    calories: {
        type: Number,
        default: 0
    },
    protines:
    {
        type: Number,
        default: 0
    },
    time:
    {
        type: String
    },
    selected: {
        type: Boolean,
        default: false
    }
})
 let productModal = mongoose.model("product",productSchema,"product");
export default productModal;
