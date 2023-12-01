import mongoose from "mongoose";

const busSchema = new mongoose.Schema({
  BusID: {type: String, required: true, unique: true },
  CompanyID: { type: String, required: true },
  BusNumber: { type: Number },
  TotalSeats: { type: Number },
  ReservedSeats: { type: Number },
  photo: { type: String },
  EnRoute: {type: String},
  bio: { type: String, maxlength: 50 },
  timeSlots: { type: Array },
  reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
  averageRating: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Bus", busSchema);
