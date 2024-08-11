import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact_number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    website: { type: String },
    type: {
        type: String,
        enum: ['Private', 'Public'],
        required: true
    },
    registration_number: {
        type: String,
        required: true
    },
    accreditation_status: {
        type: String,
        enum: ['Accredited', 'Not Accredited'],
        required: true
    },
    bed_count: {
        type: Number,
        required: true
    },
    specialties: [{ type: String }],
    services_offered: [{ type: String }],
    billing_policy: { type: String },
    password:{
        type:String,
        required:true
    }

    

    // hospital_id:{
    //     type:String,
    //     required:true,
    // },
    // name:{
    //     type:String,
    //     required:true,
    // },
    // address:{
    //     type:String,
    //     required:true,
    // },
    // contact_number:{
    //     type:Number,
    //     required:true,
    // },
    // email:{
    //     type:String,
    //     required:true,
    // },
    // type:{
    //     type:String,
    //     enum:['Public','Private'],
    //     required:true,
    // },
    // registration_number:{
    //     type:String,
    //     required:true,
    // },
    // accredition_status:{
    //     type:String,
    //     enum:['Accredited','Not Accredited'],
    //     required:true,
    // },
    // departments:{
    //     type:Array,
    //     required:true,
    // },
    // specialities:{
    //     type:Array,
    //     required:true
    // },
    // hospital_timings:{
    //     type:String,
    //     required:true,
    // },
    // fee_structure:{
    //     type:string,
    //     required:true
    // },
    // bed_count:{
    //     type:Number,
    //     required:true
    // },
    // bedavailability:{
    //     type:Number,
    //     required:true
    // },
    // insurance_affiliation:{
    //     type:String ,  //Insurance available or not
    //     enum:['Applicable','Not Applicable','Appicable to few'],
    //     required:true,

    // },
    // emergency:{
    //     type:String ,
    //     required:true
    // },
    //  equipment:{
    //      type:String,
    //      required:true
    //  }

}
);

//hash the password before saving
hospitalSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Method to compare password
hospitalSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};
export const Hospital = mongoose.model("Hospital", hospitalSchema)