import express from "express";
import dotenv from "dotenv";
import cors from "cors";
 
import Connect from "./Config/db.js";
import auth from "./Route/UserRoute.js";
import ProductRoute from "./Route/ProductRoute.js";



dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

// Connect to DB & Cloudinary
Connect();

// CORS config
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

// Test route
app.get("/api", (req, res) => {
  res.send("Welcome to the Auth Authen API");
});

// Routes
app.use("/api/auth", auth);
app.use("/api/product", ProductRoute);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
