const User = require("../model/userModel");
const bcrypt = require('bcrypt');

module.exports = {
    addUser : (data)=>{
        return new Promise(async (resolve,reject)=>{
            const roll_no = data['roll'];
            const name = data['name'];
            const password = await bcrypt.hash(data['password'], 10);
            const user = await User.create({
                roll_no,
                name,
                password,
                id
            });
            resolve(true);
        });
    },

    verifyUser : (data)=>{
        return new Promise(async (resolve, reject) => {
            console.log(data);
            const user = await User.findOne({ roll_no: data['username'] });
           

            if ((user) == null) {
                resolve(false);
            }
            else{

            console.log(user);

            bcrypt.compare(data['password'], user['password']).then((status) => {
                if (status) {
                    console.log("logged in")
                    resolve(user);
                }
                else {
                    resolve(false);
                }
            });
        }

        });
    },
}