const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
	{
        roll_no:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        id:{
            type:String,
            required:true,
        },
        password :{
            type : String,
            required: true,
        }
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("users", UserSchema);
module.exports = User;