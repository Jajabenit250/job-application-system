"use strict"
import mongoose from 'mongoose';
import validator from 'validator';

const applicantSchema = new mongoose.Schema({
    jobID: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'jobs'
    },
    fileURL: {
        type: String,
        trim: true,
        required: false,
        validate(value) {
            if (!value.length > 2) {
                throw new Error('FileUrl is required')
            }
        }
    },
    applicantName: {
        type: String,
        trim: true,
        required: false,
        validate(value) {
            if (!value.length > 2) {
                throw new Error('Applicant name is required')
            }
        }
    },

    status: {
        type: String,
        trim: true,
        required: false,
        validate(value) {
            if (!value.length > 2) {
                throw new Error('Status is required')
            }
        }
    },

    coverLetter: {
        type: String,
        trim: true,
        required: false,
        validate(value) {
            if (!value.length > 2) {
                throw new Error('Cover Letter is required')
            }
        }
    },

    status: {
        type: String,
        trim: true,
        required: false,
        validate(value) {
            if (!value.length > 2) {
                throw new Error('status is required')
            }
        }
    },

},
    {
        timestamps: true
    }
);
const applicant = mongoose.model("applicants", applicantSchema);
export default applicant;
