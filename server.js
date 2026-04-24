const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("."));

// Product API
app.get("/products", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Hoodies & Sweatshirt",
      image: "images/Hoodie.png"
    },
    {
      id: 2,
      title: "Coats & Parkas",
      image: "images/coat.png"
    },
    {
      id: 3,
      title: "Tees & T-Shirt",
      image: "images/Tees.png"
    }
  ]);
});

// ✅ subscribe route এখানে আনো
app.post("/subscribe", (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).send("Invalid email");
  }

  console.log("Saved email:", email);

  res.send("Subscribed successfully!");
});

//  
app.listen(3000, () => {
  console.log("Server running on port 3000");
});