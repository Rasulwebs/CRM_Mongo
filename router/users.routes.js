import { Router } from "express";
import users from "../controller/users.controller.js";
import positions from "../controller/positions.controller.js";
import directions from "../controller/directions.controller.js";
import JWT from "../utils/jwt.js";
import usersSchema from "../schemas/users.schema.js";
async function checkToken(req, res, next) {
  const token = req.headers.token;
  if (!token) {
    return res.status(401).json({
      message: "Error: Token mavjud emas!",
      status: 404,
      success: false,
    });
  }
  try {
    let { contact } = await usersSchema.findOne({
      contact: JWT.VERIFY(token).payload,
    });
    if (contact == JWT.VERIFY(token).payload) {
      next();
    }
  } catch (error) {
    return res.status(401).json({
      message: "Tokenda xatolik mavjud",
      status: 404,
      success: false,
    });
  }
}
const usersRoute = Router();

usersRoute.get("/users", checkToken, users.find);
usersRoute.get("/users/:id", checkToken, users.find);
usersRoute.get("/pass/code/:id", checkToken, users.confrimAdmin);
usersRoute.post("/admin/login", checkToken, users.adminLogin);
usersRoute.post("/users",checkToken,  users.create);
usersRoute.post("/user/login",checkToken, users.loginUser);
usersRoute.put("/users/:id", checkToken, users.update);
usersRoute.delete("/users/:id",checkToken, users.delete);

export default usersRoute;
