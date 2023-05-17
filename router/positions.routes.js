import { Router } from "express";
import positions from "../controller/positions.controller.js"
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
const positionRoute = Router();

positionRoute.get("/positions",checkToken, positions.find);
positionRoute.get("/positions/:id",checkToken, positions.find);
positionRoute.get("/department/positions",checkToken, positions.find);
positionRoute.get("/department/positions/:id",checkToken, positions.find);
positionRoute.post("/positions",checkToken, positions.create);
positionRoute.put("/positions/:id",checkToken, positions.update);
positionRoute.delete("/positions/:id",checkToken, positions.delete);

export default positionRoute;