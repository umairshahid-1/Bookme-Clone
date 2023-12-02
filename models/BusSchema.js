import mongoose from "mongoose";
import shortid from "shortid";

const busSchema = new mongoose.Schema(
  {
    BusID: { type: String, unique: true },
    CompanyID: { type: String, required: true },
    BusNumber: { type: Number },
    TotalSeats: { type: Number },
    ReservedSeats: { type: Number },
    photo: { type: String },
    EnRoute: { type: String },
    bio: { type: String, maxlength: 500 },
    timeSlots: { type: Array },
    reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
    averageRating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } 
);

busSchema.pre("save", function (next) {
  const bus = this;

  // Generate a unique BusID using shortid
  bus.BusID = shortid.generate();
  console.log("Generated BusID:", bus.BusID);
  next();
});

export default mongoose.model("Bus", busSchema);