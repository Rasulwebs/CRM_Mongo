import CheksSchema from "../schemas/checks.schema.js";

class CentreClass {
  async get(id) {
    if (id)
      return await CheksSchema.findById(id)
        .populate("gr_ref_id")
        .populate("user_ref_id");
    else
      return await CheksSchema.find()
        .populate("gr_ref_id")
        .populate("user_ref_id");
  }
  async post(data) {
    try {
      return await CheksSchema.create(data);
    } catch (er) {
      return er;
    }
  }
  async put(id, data) {
    return await CheksSchema.updateOne({ _id: id }, data);
  }
  async delete(id, data) {
    return await CheksSchema.deleteOne({ _id: id });
  }
}
export default new CentreClass();
