import mongoose from "mongoose";
import config from "config";

mongoose
  .connect(config.get("db"))
  .then(() => console.log("connection MongoDB"))
  .catch((er) => console.log(er.message));
// mongoose.connect("mongodb+srv://Rasulwebs:nemo008@cluster0.fyjromz.mongodb.net/exam4?retryWrites=true&w=majority").then(() => {
//   console.log("connection");
  
// });