import checks from "../models/checks.model.js"

class checksContr {
  async find(req, res) {
    const { id } = req.params;
    res.send(await checks.get(id));
  }
  async create(req, res) {
    res.send(await checks.post(req.body));
  }
  async update(req, res) {
    const { id } = req.params;
    res.send(await checks.put(id, req.body));
  }
  async delete(req, res) {
    const { id } = req.params;
    res.send(await checks.delete(id));
  }
}

export default new checksContr();