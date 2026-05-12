import User from "../models/user.model.js";

const register = async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    const userExists = await User.find({ email });

    if (userExists.length > 0) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }
    const user = await User.create({
      name,
      email,
      phone,
      password,
    });
    res.json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Login functionality

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }
    if (user.password !== password) {
      return res.json({
        success: false,
        message: "Invalid credentials",
      });
    }
    res.json({
      success: true,
      message: "Login successful",
      user,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export { register, login };
