import { Router } from "express";
import departments from "../controller/departments.controller.js"
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

const departmentRoute = Router();

departmentRoute.get("/departments",checkToken, departments.find);
departmentRoute.get("/department/positions",checkToken, positions.find);
departmentRoute.get("/department/directions",checkToken, directions.find);
departmentRoute.get("/department/positions/:id",checkToken, positions.find);
departmentRoute.get("/department/directions/:id",checkToken, directions.find);
departmentRoute.get("/departments/:id",checkToken, departments.find);
departmentRoute.post("/departments",checkToken, departments.create);
departmentRoute.put("/departments/:id",checkToken, departments.update);
departmentRoute.delete("/departments/:id",checkToken, departments.delete);

export default departmentRoute;