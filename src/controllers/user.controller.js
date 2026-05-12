import User from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({}, { password: 0 });
  res.json({
    success: true,
    message: "Users fetched successfully",
    users,
  });
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.find({ _id: id }, { password: 0 });
    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }
    res.json({
      success: true,
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateUserById = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, {
      name,
      email,
      phone,
    });
    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }
    res.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
