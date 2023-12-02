import express from "express";
import {
  addNewBus,
  updateBus,
  deleteBus,
  getAllBus,
  getSingleBus,
} from "../Controllers/BusController.js";
import reviewRouter from "./Review.js"

const router = express.Router();

router.use("/busID/reviews", reviewRouter)

router.post("/addnewbus", addNewBus);
router.get("/:id", getSingleBus);
router.get("/", getAllBus);
router.put("/:id", updateBus);
router.delete("/:id", deleteBus);

export default router;
