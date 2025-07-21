const { connectToMongo } = require("./mongoose");
const express = require('express')
const cors = require("cors");
const app = express()
const authRoutes = require("./routes/auth-route");

connectToMongo().catch(err => console.log(err));
require("dotenv").config();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
