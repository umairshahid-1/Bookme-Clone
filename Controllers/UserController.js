import User from "../models/UserSchema.js";
import Bus from "../models/BusSchema.js";
import bcrypt from "bcrypt";


export const SignUp = async (req, res) => {
  const { email, password, name, role, photo, gender, CNIC, phone } = req.body;

  try {
    let user = null;

    // Check if user exists
    if (role === 'user' || role === 'admin') {
        user = await User.findOne({ email });
        console.log("pt 0")
    }

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    console.log("pt 1")

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    console.log("pt 2")

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

      console.log("pt 3")

      await user.save();
      console.log("pt 4")
      return res.status(200).json({ message: "User successfully signed up" });
    }
  } catch (err) {
    console.error("Error during signup:", err);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/*{
    "name": "admin",
    "email": "admin@gmail.com",
    "password": "admin123",
    "role": "user",
    "gender": "male",
    "CNIC": "122129034344",
    "phone": "+1234567390"
}

*/


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