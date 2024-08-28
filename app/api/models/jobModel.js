import mongoose from "mongoose"


const jobSchema = new mongoose.Schema({

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
    salary: {
        type: String,
        required: true
    },
    benefits: {
        type: String,
        required: true
    },
    jobType: {
        type: [String],  // Array of strings
        default: []
    },
    description: {
        type: String,
        required: true
    },
    aboutRole: {
        type: [String],  // Array of strings
        default: ['']
    },
    jobTasks: {
        type: [String],  // Array of strings
        default: ['']
    },
    skills: {
        type: [String],  // Array of strings
        default: ['']
    },
    careerLevel: {
        type: String,
        required: true
    },
    image: {
        type: String // Store the URL or identifier of the image
    },
    slug: { type: String, unique: true, required: true },
}, { timestamps: true });

const Jobs = mongoose.models.jobs || mongoose.model("jobs", jobSchema)

export default Jobs;
