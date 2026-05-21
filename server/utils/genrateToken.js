import jwt from "jsonwebtoken";

const generateToken = (email, role) => {
  return jwt.sign({ email, role }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generateToken;
