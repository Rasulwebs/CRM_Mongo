import { Router } from "express";
import checks from "../controller/checks.controller.js"
import JWT from "../utils/jwt.js";
import usersSchema from "../schemas/users.schema.js";
async function checkToken(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({
            message: "Error: Token mavjud emas!",
            status:404,
            success:false
        });
    }
    try {
        let {
            contact
        } = await usersSchema.findOne({
            contact: JWT.VERIFY(token).payload
        });
        if (contact == JWT.VERIFY(token).payload) {
            next();
        }
    } catch (error) {
        return res.status(401).json({
            message: "Tokenda xatolik mavjud",
            status:404,
            success:false
        });
    }
}
const checksRoute = Router();

checksRoute.get("/checks",checkToken, checks.find);
checksRoute.get("/checks/:id",checkToken, checks.find);
checksRoute.post("/checks",checkToken, checks.create);
checksRoute.put("/checks/:id",checkToken, checks.update);
// departmentRoute.delete("/departments/:id", departments.delete);

export default checksRoute;