import express from "express";
import config from "config"
const PORT = config.get("port") || 3000;
const app = express();
import "../mongo/mongo.js"
import jwt from "../utils/jwt.js"
import departmentRoute from "../router/department.routes.js";
import centertRoute from "../router/center.routes.js";
import directRoute from "../router/directions.routes.js";
import positionRoute from "../router/positions.routes.js";
import usersRoute from "../router/users.routes.js";
import groupsRoute from "../router/groups.routes.js";
import checksRoute from "../router/checks.routes.js";
import incomesRoute from "../router/incomes.routes.js";











app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(departmentRoute)
app.use(centertRoute)
app.use(directRoute)
app.use(positionRoute)
app.use(usersRoute)
app.use(checksRoute)
app.use(incomesRoute)

app.use(groupsRoute)



app.listen(PORT, ()=>console.log("Running..."+ PORT));
