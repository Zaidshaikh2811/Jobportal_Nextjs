import mongoose from "mongoose"

const jobModel = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})

const Jobs = mongoose.models.jobs || mongoose.model("jobs", jobModel)

export default Jobs;
