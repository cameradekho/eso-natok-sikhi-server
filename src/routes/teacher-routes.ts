import { deleteTeacherById } from "../controllers/teachers/delete-teacher-by-id";
import { getAllTeacher } from "../controllers/teachers/get-all-tecaher";
import { postTeacher } from "../controllers/teachers/post-teacher";

const express = require("express");
const teacherRoutes = express.Router();

teacherRoutes.route('/')
    .get(getAllTeacher)
    .post(postTeacher)

teacherRoutes.route('/:id')
    .delete(deleteTeacherById)

export default teacherRoutes;