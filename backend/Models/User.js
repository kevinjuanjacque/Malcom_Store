const mongoose =require('mongoose');
const { Schema } =require('mongoose');

const User = new Schema({
    nombre:     {
                    firstName: {type:String,required:true},
                    lastName: {type:String,required:true}
                },
    email:      {type:String,required:true,unique:true},
    password:   {type:String,required:false},
    telefono:   {type: String, required:false},
},
{
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports=mongoose.model('Usuario',User);