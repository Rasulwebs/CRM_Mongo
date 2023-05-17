import departments from "../models/department.model.js";
import JWT from "../utils/jwt.js"
import usersSchema from "../schemas/users.schema.js";
class depContr {
  async find(req, res) {
    const {token}=req.headers
    const { id } = req.params;
    // let adminToken=JWT.VERIFY(token).payload;
    // let isAdmin=usersSchema.findOne({contact:adminToken})
    // console.log(adminToken)
    // if(!token){
    //   res.send({status:404, message:"Token mavjud emas"});
    // }else if(isAdmin){
    // res.send(await departments.get(id, req.query));
    // }else{
    //   res.send({status:404, message:"Sizda bunga ruxsat yo'q yoki Tokenda xatolik"});
    // }
    res.send(await departments.get(id, req.query));
  }
  async create(req, res) {
    res.send(await departments.post(req.body));
  }
  async update(req, res) {
    const { id } = req.params;
    res.send(await departments.put(id, req.body));
  }
  async delete(req, res) {
    const { id } = req.params;
    res.send(await departments.delete(id));
  }
}

export default new depContr();