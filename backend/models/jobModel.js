import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    company:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["Applied","Interview","Offer","Rejected"],
        default:"Applied"
    },
    appliedDate:{
        type:Date,
        required:true
    },
    link:{
        type:String,
    },
},{timestamps:true});

const Job = mongoose.model("job",jobSchema);
export default Job;
