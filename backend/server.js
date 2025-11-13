const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Empire Backend Running"));

app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
});

app.post("/order", (req, res) => {
  const order = req.body;
  res.json({ message: "Order received", order });
});

app.listen(8080, () => console.log("Server running on port 8080"));
