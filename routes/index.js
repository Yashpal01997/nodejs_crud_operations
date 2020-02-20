import student from '../controllers/studentController';

export default (app) => {
    app.route('/students')
        .get(student.getAllStudents)
        .post(student.createStudent);

    app.route('/students/:studentId')
        .get(student.getStudent)
        .put(student.updateStudent)
        .delete(student.deleteStudent);
};