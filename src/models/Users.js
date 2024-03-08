import mongoose from 'mongoose';
const { Schema } = mongoose;


const userSchema = new Schema({
    lastName    : String, 
    firstName   : String,
    email       : { type:String,  required:'un nom est obligatoire :)', unique:true },
    password    : { type:String },
    skill       : [String],
    roles       : String
},
{ timestamps: true }
);

const userModel = mongoose.model('users',userSchema);

export default userModel;