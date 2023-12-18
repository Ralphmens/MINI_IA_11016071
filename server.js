const express = require('express')
const mongoose = require('mongoose')
const app = express()
const {v4: uuidv4} = require

//schema
const PatientSchema = new mongoose.Schema({
    Paitent_ID: Number,
    Surname: String,
    Othernames: String,
    Gender: String,
    Phone_Number: String,
    Residential_Address: String,
    Emergency_name: {
        E_name: String,
        E_contact: String,
        ERelationship: String
    }
})

const Patient = mongoose.model('Patient', PatientSchema)
app.use(express.json());


//routes
app.post('/pateints', async(res, req) => {
    try {
        const new_patient = new Patient(req.body)
        const saved_patient = await new_patient.save();
        res.json(saved_patient);
    } catch (error){
        res.status(400).json({error: error.message})
    };
})

app.post('/', (res, req) => {

})

app.post('/', (res, req) => {

})

app.post('/', (res, req) => {

})

app.post('/', (res, req) => {

})



app.listen(3000, () =>{
    console.log("Listening from port 3000")
})


