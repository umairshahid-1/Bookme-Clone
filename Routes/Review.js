import express from "express";
import { getAllReviews, createReview } from "../Controllers/ReviewController.js";


const router = express.Router();

router
  .route("/")
  .get(getAllReviews)
  .post(createReview);

export default router;
