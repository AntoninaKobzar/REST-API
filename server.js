const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://Antonina:ByJA5vY5KerBqFM@cluster0.pd04jbe.mongodb.net/users-contacts?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
