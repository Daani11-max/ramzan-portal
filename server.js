const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.static("."));

const data = JSON.parse(fs.readFileSync("data.json"));

app.post("/check", (req, res) => {

    const cnic = req.body.cnic;

    const found = data.find(person => person.cnic === cnic);

    if(found){
        res.json({message:"آپ رمضان پیکیج کے لیے اہل ہیں"});
    }else{
        res.json({message:"آپ رمضان پیکیج کے لیے اہل نہیں ہیں"});
    }

});

app.listen(3000,()=>{
console.log("Server running on port 3000");
});