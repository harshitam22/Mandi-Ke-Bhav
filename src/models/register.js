const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const employeeSchema= new mongoose.Schema({
    full_name: {
        type:String,
        required:true
    },

    email: {
        type:String,
        required:true,
        unique:true
    },

    password: {
        type:String,
        required:true
    },
    
    confirm: {
        type:String,
        required:true
    },
})

employeeSchema.pre('save', async function(next){
    this.password = await bcrypt.hash(this.password , 10);
    next();
    this.confirm = undefined;
})

const Register = new mongoose.model("Register",employeeSchema);
module.exports=Register;
