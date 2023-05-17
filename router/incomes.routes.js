import { Router } from "express";
import incomes from "../controller/incomes.controller.js";
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
const incomesRoute = Router();

incomesRoute.get("/incomes", checkToken, incomes.find);
incomesRoute.get("/incomes/:id", checkToken, incomes.find);
incomesRoute.post("/incomes",checkToken, incomes.create);
incomesRoute.put("/incomes/:id", checkToken, incomes.update);
incomesRoute.delete("/incomes/:id", checkToken, incomes.delete);

export default incomesRoute;
