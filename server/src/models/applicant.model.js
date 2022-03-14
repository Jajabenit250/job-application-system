"use strict"
import mongoose from 'mongoose';
import validator from 'validator';

const applicantSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    jobID: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'jobs'
    },
    fileURL: {
        type: String,
        trim: true,
        required: true,
        validate(value) {
            if (!value.length > 2) {
                throw new Error('Title is required')
            }
        }
    },
    applicantName: {
        type: String,
        trim: true,
        required: false,
        validate(value) {
            if (!value.length > 2) {
                throw new Error('File name is required')
            }
        }
    },

    status: {
        type: String,
        trim: true,
        required: false,
        validate(value) {
            if (!value.length > 2) {
                throw new Error('File name is required')
            }
        }
    },

    coverLetter: {
        type: String,
        trim: true,
        required: false,
        validate(value) {
            if (!value.length > 2) {
                throw new Error('File name is required')
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
