import express from "express";
import dotenv from "dotenv";
import ordersRouter from "./routes/orders.route.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use("/api/orders", ordersRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to my express api" });
});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
