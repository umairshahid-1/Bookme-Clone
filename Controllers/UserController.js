import User from "../models/UserSchema.js";
import bcrypt from "bcrypt";


export const SignUp = async (req, res) => {
  const { email, password, name, role, photo, gender, CNIC, phone } = req.body;

  try {
    let user = null;

    // Check if user exists
    if (role === 'user' || role === 'admin') {
        user = await User.findOne({ email });
    }

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);


    // Create a new user
    if (role === 'user') {
      user = new User({
        name,
        email,
        password: hashPassword,
        role,
        gender,
        CNIC,
        photo,
        phone,
      });


      await user.save();
      return res.status(200).json({ message: "User successfully signed up" });
    }
  } catch (err) {
    console.error("Error during signup:", err);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};


export const Login = async (req, res) => {

  const {email,password} = req.body;


  try {
    let person = await User.findOne({ email });

    // Check if user exists or not
    if (!person) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords
    const isPasswordMatch = person.password && await bcrypt.compare(password, person.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ status: false, message: "Invalid credentials" });
    }


    // Authentication successful
    // You may want to create and send a JWT token here for authentication

    return res.status(200).json({ status: true, message: "Login successful" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};


export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

export const deleteUser = async (req, res) => {
    const id = req.params.id;
  
    try {
      await User.findByIdAndDelete(
        id,
      );
  
      res.status(200).json({
        success: true,
        message: "Successfully deleted",
      });
    } catch (err) {
      res.status(500).json({ success: false, message: "Failed to delete" });
    }
  };
  
  
  export const getSingleUser = async (req, res) => {
    const id = req.params.id;
  
    try {
      const user = await User.findById(id).select("-password");
  
      if (!user) {
        return res.status(404).json({ success: false, message: "No user found" });
      }
  
      res.status(200).json({
        success: true,
        message: "User found",
        data: user,
      });
    } catch (err) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  };
  
  
  export const getAllUser = async (req, res) => {
  
    try {
      const users = await User.find({}).select("-password");
  
      res.status(200).json({
        success: true,
        message: "Successfully updated",
        data: users,
      });
    } catch (err) {
      res.status(500).json({ success: false, message: "not found" });
    }
  };
  