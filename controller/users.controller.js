import users from "../models/users.model.js";
import { confrimEmail } from "../utils/snderMail.js";
import JWT from "../utils/jwt.js";
class usersContr {
  async find(req, res) {
    const { id } = req.params;
    res.send(await users.get(id, req.query));
  }
  async adminLogin(req, res) {
    const { email, contact } = req.body;
  try{
    confrimEmail(email, JWT.SIGN(contact));
    res.send({
      message: "Gmail pochtangiz orqali tasdilang",
      success:true
    })
  }catch(err){
    res.send({
      message: err.message,
      success:false
    })
  }
  }

  async confrimAdmin(req, res) {
    const { id } = req.params;
    res.send({
      token: id,
      success:true
    });
  }
  async loginUser(req, res) {
    let {
      email,
      contact
    } = req.body;
    confrimEmail(email, JWT.SIGN(contact));
    try {
      res.send({
        message: "Gmail pochtangiz orqali tasdiqlang " + email,
        success:true
      })
    } catch (error) {
      res.send({
        message: error.message
      })
    }
  }
async userConfrim(req, res){
  let {
    id
  } = req.params;
  res.send({
    token: id,
    message: "your token is saved successfully"
  })
}

  async create(req, res) {
    res.send(await users.post(req.body));
  }
  async update(req, res) {
    const { id } = req.params;
    res.send(await users.put(id, req.body));
  }
  async delete(req, res) {
    const { id } = req.params;
    res.send(await users.delete(id));
  }
}

export default new usersContr();
