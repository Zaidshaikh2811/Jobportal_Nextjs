import mongoose from "mongoose"


const jobSchema = new mongoose.Schema({
    jobType: {
        type: [String], // Array of strings for the type field
        default: []
    },
    jobTitle: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    salary: {
        type: String
    },
    category: {
        type: String,
        required: true,
        enum: ['Development', 'Marketing', 'Design', 'Finance', 'Human Resources', 'Automotive Jobs', 'Customer Services', 'Health and Care', 'Project Management'], // Enum to restrict to specific values
        trim: true
    },
    careerLevel: {
        type: String,
        required: true,
        enum: ['Entry Level', 'Mid Level', 'Senior Level', 'Managerial Level', 'Executive Level'], // Enum to restrict to specific values
        trim: true
    }, phone: {
        type: String
    },
    qualification: {
        type: String
    },
    gender: {
        type: String
    },
    experience: {
        type: String
    },
    address: {
        type: String
    },
    deadline: {
        type: Date
    },
    location2: {
        type: String
    },
    image: {
        type: String // Store the URL or identifier of the image
    }
}, { timestamps: true });

const Jobs = mongoose.models.jobs || mongoose.model("jobs", jobSchema)

export default Jobs;
