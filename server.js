if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

//db connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true
});
const db = mongoose.connection;
db.on("error", error => console.error(erro));
db.once("open", () => console.log("Connected to Mongoose"));
//routes
app.use("/", require("./routes/index"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server started at port ${port}`));
