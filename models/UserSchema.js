import mongoose from "mongoose";
import shortid from "shortid";

const UserSchema = new mongoose.Schema(
  {
    userID: { type: String, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: Number },
    photo: { type: String },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    gender: { type: String, enum: ["male", "female", "other"] },
    CNIC: { type: String },
    BookingsHistory: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
    createdOn: { type: Date, default: Date.now },
    updatedOn: { type: Date, default: Date.now },
  },
  { timestamps: true } // Enables timestamps (createdOn and updatedOn) automatically
);

// Pre-save hook to generate a unique userID
UserSchema.pre("save", function (next) {
  const user = this;

  // Generate a unique userID using shortid
  user.userID = shortid.generate();
  console.log("Generated userID:", user.userID);
  next();
});

export default mongoose.model("User", UserSchema);
