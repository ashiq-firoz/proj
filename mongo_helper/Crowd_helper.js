const Crowd = require("../model/CrowdModel");

module.exports = {
    addCrowd : (data)=>{
        return new Promise(async(resolve,reject)=>{
            let mon = data['month'];
            let day = data['day'];
            let dc = data['count'];

            let crowd = await Crowd.find({});
            if(!crowd){
                await Crowd.create({
                    month : {mon:{day:dc}}
                })
            }
        });
    }
}