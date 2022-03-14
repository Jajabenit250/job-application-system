"use strict"
import mongoose from 'mongoose';
import validator from 'validator';

const jobSchema = new mongoose.Schema({
    jobID: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'jobs'
    },
    jobName: {
        type: String,
        trim: true,
        required: true,
        validate(value) {
            if (!value.length > 2) {
                throw new Error('FileUrl is required')
            }
        }
    },
    description: {
        type: String,
        trim: true,
        required: false,
        validate(value) {
            if (!value.length > 2) {
                throw new Error('Applicant name is required')
            }
        }
    },

},
    {
        timestamps: true
    }
);
const job = mongoose.model("jobs", jobSchema);
export default job;
