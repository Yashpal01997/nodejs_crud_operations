import mongoose from 'mongoose'; 
import student from '../models/studentModel';

exports.getStudent = (req, res) => {
    student.findById(req.params.studentId, (err, student) => {
        if (err) {
            res.send(err);
        }

        res.json(student);
    });
};

exports.getAllStudents = (req, res) => {
    student.find({}, (err, students) => {
        if (err) {
            res.send(err);
        }

        res.json(students);
    });
};

exports.createStudent = (req, res) => {
    const newStudent = new student(req.body);

    newStudent.save((err, student) => {
        if (err) {
            res.send(err);
        }

        res.json(student);
    });
};

exports.updateStudent = (req, res) => {
    student.findOneAndUpdate({
        _id: req.params.studentId
    }, req.body,
        (err, student) => {
            if (err) {
                res.send(err);
            }

            res.json(student);
        });
};

exports.deleteStudent = (req, res) => {
    student.remove({
        _id: req.params.studentId
    }, (err) => {
        if (err) {
            res.send(err);
        }

        res.json({
            message: `note ${req.params.studentId} successfully deleted`
        });
    });
};