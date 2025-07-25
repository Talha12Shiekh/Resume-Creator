require("dotenv").config({quiet:true});

const { connectToMongo } = require("./mongoose");
const express = require('express')
const cors = require("cors");
const path = require("path"); 
const app = express();
const authRoutes = require("./routes/auth-route");
const certRoutes = require("./routes/cert-route");
const authMiddlewear = require("./middlewears/authMiddlewear");

// https://expressjs.com/en/guide/migrating-5.html

connectToMongo().catch(err => console.log(err));
const port = 3000;

app.use(cors());
app.use(express.json({ limit: "10mb" })); 
app.use(express.urlencoded({ extended: true, limit: "10mb" }));


app.use("/api/auth", authRoutes);
app.use("/api/certificates", authMiddlewear, certRoutes);

app.use(express.static(path.join(__dirname, "dist")));

app.get("/*splat", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

