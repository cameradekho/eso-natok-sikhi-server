import { getAbout } from "../controllers/about/get-about";
import { postAbout } from "../controllers/about/post-about";
import { updateAbout } from "../controllers/about/update-about";

const express = require("express");

const aboutRoutes = express.Router();

aboutRoutes.route('/')
    .get(getAbout)
    .post(postAbout)
    .put(updateAbout)
export default aboutRoutes;