const Patient = require("../model/patientdataModel");

module.exports = {
    addData : (data)=>{
        return new Promise(async (resolve,reject) =>{
            const roll_no = data['roll'];
            const name = data['name'];
            const symptoms = data['symptoms'];
            const remarks = data['remarks'];
            const disease = data['disease'];
            const date = getFormattedDate();
            //const predicted = data['predicted'];

            const patient = await Patient.create({
                roll_no,
                name,
                disease,
                symptoms,
                remarks,
                predicted,
                date,
            });
            resolve(patient);
        });
    },
    getpatients : ()=>{
        return new Promise(async(resolve, reject) => {
            const patient = await Patient.find({});
            console.log(patient);
            if(patient==null){
                resolve(false);
            }
            else{
                resolve(patient);
            }
        });
    },
    getpatient : (data)=>{
        return new Promise(async(resolve, reject) => {
            const patient = await Patient.find({id:data});

            if(patient==null){
                resolve(false);
            }
            else{
                resolve(patient);
            }
        });
    }
    
}


function getFormattedDate() {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
  
    // Add leading zero if month or day is less than 10
    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }
  
    return `${year}-${month}-${day}`;
  }
  

  //console.log(formattedDate);
  