// const jwt = require("jsonwebtoken");
// require("dotenv").config();
// const { SECRET_KEY } = process.env;
// const payload = {
//   id: "64a15f27bbc3d22cd385a05c",
// };
// const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
// // console.log(token);
// const decodeToken = jwt.decode(token);
// // console.log(decodeToken);
// try {
//   const { id } = jwt.verify(token, SECRET_KEY);
//   console.log(id);
//   const invalidToken =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTE1ZjI3YmJjM2QyMmNkMzg1YTA1YyIsImlhdCI6MTY4ODMxMjEyNSwiZXhwIjoxNjg4Mzk0OTI1fQ.GpqV1qcQmtg035UT0rumeuAA7qoCCbZJ8Ha_GezYhF4";
//   const result = jwt.verify(invalidToken, SECRET_KEY);
// } catch (error) {
//   console.log(error.message);
// }

const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const authRouter = require("./routes/api/auth");

const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
