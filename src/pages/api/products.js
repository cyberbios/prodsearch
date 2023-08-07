import mongoose from "mongoose";

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/imageDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ error: "Server error" });
    }
  } else if (req.method === "POST") {
    // Handle the search request
    const keyword = req.body.keyword;
    try {
      const products = await Product.find({ keywords: keyword });
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
