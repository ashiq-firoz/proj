const mongoose = require("mongoose");

const patientdataSchema = mongoose.Schema(
	{
        roll_no:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        symptoms:{
            type:String,
            required:true
        },
        disease:{
            type:String,
            required:true
        },
        date : {
            type:String,
            required:true,
        },
        predicted : {
            type:String,
        },
        remarks:{
            type:String,
            required:true
        }
	},
	{
		timestamps: true,
	}
);

const Patientdata = mongoose.model("PatientData", patientdataSchema);
module.exports = Patientdata;