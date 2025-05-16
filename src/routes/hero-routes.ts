import { updateHero } from "../controllers/hero/update-hero";
import { postHero } from "../controllers/hero/post-hero";
import { getHero } from "../controllers/hero/get-hero";

const express = require("express");

const heroRoutes = express.Router();

heroRoutes.route('/')
    .get(getHero)
    .post(postHero)
    .put(updateHero)

export default heroRoutes;