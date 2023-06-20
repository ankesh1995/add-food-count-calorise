import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import productModal from './productSchema.js';

let app = express();

app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended: true}));
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/product");
mongoose.connection.once("open",()=>console.log("db is connected.."));
mongoose.connection.on("error",(error)=>console.log(""+error));

app.post('/addProducts',async(req,res)=>{
    
    let { pro_item,cal,proteins,time } = req.body;

    let check = await productModal.findOne({item: pro_item});

    if(check !== null)
    {
        res.status(200).json({message: 'product already exist'});
    }
    else{

        let a = await productModal.create({item: pro_item, calories:cal, protines: proteins, time: time});

        res.status(200).json({message: 'added product to the database'});
    }

})

app.get('/fetchAlldata',async(req,res)=>{
    let data = await productModal.find({});

    res.status(200).json({data: data});
})

app.listen(4000,()=>console.log('server running at 4000'));