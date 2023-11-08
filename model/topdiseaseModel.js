const mongoose = require("mongoose");

const topDiseaseSchema = mongoose.Schema(
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
        date : {
            type:String,
            required:true,
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

const topDisease = mongoose.model("TopDisease", topDiseaseSchema);
module.exports = topDisease;