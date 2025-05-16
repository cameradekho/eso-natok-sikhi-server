import { postStudent } from "../controllers/students/post-student";
import { deleteStudentById } from "../controllers/students/delete-student-by-id";
import { getAllStudents } from "../controllers/students/get-all-students";

const express = require("express");

const studentRoutes = express.Router();

studentRoutes.route('/')
    .get(getAllStudents)
    .post(postStudent)

studentRoutes.route('/:id')
    .delete(deleteStudentById)

export default studentRoutes;