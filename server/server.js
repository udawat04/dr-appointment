import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/data.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 4000;

connectDB();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
  }),
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth/user", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
