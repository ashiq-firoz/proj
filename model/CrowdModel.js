const mongoose = require("mongoose");

const CrowdSchema = mongoose.Schema(
	{
        month :{
            type:Object,
            required:true
        }
	},
	{
		timestamps: true,
	}
);

const Crowd = mongoose.model("Crowd", CrowdSchema);
module.exports = Crowd;