import { Router } from "express";
import center from "../controller/center.controller.js"
const centertRoute = Router();

centertRoute.get("/center", center.find);
centertRoute.post("/center", center.create);
// departmentRoute.post("/departments", departments.create);
// departmentRoute.put("/departments/:id", departments.update);
// departmentRoute.delete("/departments/:id", departments.delete);

export default centertRoute;