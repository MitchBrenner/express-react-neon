import express from "express";
import { sql } from "../config/db.js";

const ordersRouter = express.Router();

ordersRouter.get("/", async (req, res) => {
  try {
    const orders = await sql`
        SELECT * FROM orders
    `;
    res.status(200).json(orders);
  } catch (error) {
    console.log("Error getting orders ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

ordersRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const order = await sql`
        SELECT * FROM orders WHERE order_id=${id}
    `;

    if (order.length === 0) {
      res.status(404).json({ message: "Order ID not found" });
    }

    res.status(200).json(order[0]);
  } catch (error) {
    console.log("Error getting order ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

ordersRouter.post("/", async (req, res) => {
  const { item, price, user_id } = req.body;

  try {
    const result = await sql`
        INSERT INTO orders (item, price, user_id)
        VALUES (${item}, ${price}, ${user_id})
        RETURNING *
    `;

    const newOrder = result[0];

    res
      .status(201)
      .json({ message: "successfully added new order", order: newOrder });
  } catch (error) {
    console.log("Error posting order ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

ordersRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedOrder = await sql`
        DELETE FROM orders
        WHERE order_id = ${id}
        RETURNING *
    `;

    if (deletedOrder.length === 0) {
      res.status(404).json({ message: `Could not find order #${id}` });
    }

    res.status(200).json({ message: `Successfully deleted order #${id}` });
  } catch (error) {
    console.log("Error posting order ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default ordersRouter;
