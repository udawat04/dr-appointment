import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/genrateToken.js";

const sanitizeUser = (user) => {
  const obj = user.toObject ? user.toObject() : { ...user };
  delete obj.password;
  return obj;
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email, and password are required" });
    }

    const allowedRoles = ["admin", "doctor", "user"];
    const userRole = allowedRoles.includes(role) ? role : "user";

    const alreadyUser = await User.findOne({ email });

    if (alreadyUser) {
      return res.status(400).json({ message: "User Already Exist" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = await User.create({
      name,
      email,
      password: hash,
      role: userRole,
    });

    const token = generateToken(newUser.email, newUser.role);

    return res.status(201).json({
      message: "User Created Successfully",
      user: sanitizeUser(newUser),
      token,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const alreadyUser = await User.findOne({ email });

    if (!alreadyUser) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const match = await bcrypt.compare(password, alreadyUser.password);

    if (!match) {
      return res.status(400).json({ message: "Password not Match Or Invalid Password" });
    }

    const token = generateToken(alreadyUser.email, alreadyUser.role);

    return res.status(200).json({
      message: "User Logged In Successfully",
      user: sanitizeUser(alreadyUser),
      token,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
