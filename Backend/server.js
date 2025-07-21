require("dotenv").config();

const { connectToMongo } = require("./mongoose");
const express = require('express')
const cors = require("cors");
const app = express()
const authRoutes = require("./routes/auth-route");
const certRoutes = require("./routes/cert-route");
const authMiddlewear = require("./middlewears/authMiddlewear");

connectToMongo().catch(err => console.log(err));
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/certificates", authMiddlewear, certRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

