import { Router } from "express";
import departments from "../controller/departments.controller.js"
import directions from "../controller/directions.controller.js"
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
const directRoute = Router();

directRoute.get("/directions",checkToken, directions.find);
directRoute.get("/directions/:id",checkToken, directions.find);
directRoute.get("/department/directions",checkToken, directions.find);
directRoute.get("/department/directions/:id",checkToken, directions.find);
directRoute.post("/directions",checkToken, directions.create);

directRoute.put("/departments/:id",checkToken, departments.update);
directRoute.delete("/departments/:id",checkToken, departments.delete);

export default directRoute;