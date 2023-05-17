import { Router } from "express";
import groups from "../controller/groups.controller.js"
import directions from "../controller/directions.controller.js"
import positions from "../controller/positions.controller.js"
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
const groupsRoute = Router();

groupsRoute.get("/groups",checkToken, groups.find);
groupsRoute.get("/groups/:id",checkToken, groups.find);
groupsRoute.post("/groups",checkToken, groups.create);
groupsRoute.put("/groups/:id",checkToken, groups.update);
groupsRoute.delete("/groups/:id",checkToken, groups.delete);

export default groupsRoute;