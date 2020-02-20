import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for students
 */
const StudentScheme = new Schema({
    Name: {
        type: String,
        required: "What is the student's name?"
    },
    City: {
        type: String,
        required: "What is the student's city?"
    },
    Father: {
        type: String,
        required: "What is the student's father's name?"
    },
    Mother: {
        type: String,
        required: "What is the student's mother's name?"
    },
    DOJ: {
        type: Date,
        required: "What is the student's date of joining?"
    },
    Class: {
        type: String,
        required: "What is the student's class?"
    },
    Section: {
        type: String,
        required: "What is the student's section?"
    },
    Email: {
        type: String,
        required: "What is the student's email Id?"
    },
    Phone: {
        type: String,
        required: "What is the student's phone Number?"
    },
});

export default mongoose.model('Student', StudentScheme);
