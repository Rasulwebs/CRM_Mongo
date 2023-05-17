import incomesSchema from "../schemas/incomes.shema.js";

class CentreClass {
  async get(id) {
    if (id)
      return await incomesSchema.findById(id)
        .populate("user_ref_id")
       
    else
      return await incomesSchema.find()
      .populate("user_ref_id")
  }
  async post(data) {
    try {
      return await incomesSchema.create(data);
    } catch (er) {
      return er;
    }
  }
  async put(id, data) {
    return await incomesSchema.updateOne({ _id: id }, data);
  }
  async delete(id, data) {
    return await incomesSchema.deleteOne({ _id: id });
  }
}
export default new CentreClass();
