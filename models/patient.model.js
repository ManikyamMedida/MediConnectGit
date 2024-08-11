import mongoose from "mongoose";
//const userSchema=new mongoose.Schema({
//     fullname:{
//         type:String,
//         required:true
//     },
//     age:{
//         type:Number,
//         required:true
//     },
//     gender:{
//         type:String,
//     },
//     phoneNumber:{
//         type:Number,
//         required:true
//     },
//     email:{
//         type:String,
//         unique:true
//     },
//     password:{
//         type:String,
//         required:true
//     },
//     role:{
//         type:String,
//         enum:['user','hospital'],
//         required:true
//     },

// },{timestamps:true});
const patientSchema = new mongoose.Schema({
    hospial_id:{
          type: mongoose.Schema.Types.ObjectId,
          required:true,
          ref:'Hospital'
    },
    patient_id:{
         type:String,
         required:[true,"Please enter patient Id"]
    },
    password:{
        type:String,
        required:true
    },},
    {timestamps:true});
    // name: {
    //     type: String,
    //     required: true
    // },
    // age: {
    //     type: Number,
    //     required: true
    // },
    // gender: {
    //     type: String,
    //     enum: ['Male', 'Female', 'Other'],
    //     required: true
    // },
    // contact_number: {
    //     type: String,
    //     required: true
    // },
    // email: {
    //     type: String,
    //     required: true
    // },
    // medical_history: { type: String }
   //hash the password before saving
patientSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Method to compare password
patientSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};


export const Patient = mongoose.model('Patient', patientSchema);