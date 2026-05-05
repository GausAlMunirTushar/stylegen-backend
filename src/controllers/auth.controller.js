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

const getAllUsers = async (req, res) => {
  const users = await User.find({}, { password: 0 });
  res.json({
    success: true,
    message: "Users fetched successfully",
    users,
  });
};

export { register, getAllUsers };
