import usersSchema from "../schemas/users.schema.js";

class UsersClass {
  async get(id, query) {
    if (query.username) {
      return await usersSchema
        .find({ first_name: query.username, left_date: null })
        .populate("pos_ref_id")
        .populate("group_ref_id");
    } else if (query.contact) {
      return await usersSchema
        .find({ contact: query.contact, left_date: null })
        .populate("pos_ref_id")
        .populate("group_ref_id");
    } else if (query.gender) {
      return await usersSchema
        .find({ gender: query.gender, left_date: null })
        .populate("pos_ref_id")
        .populate("group_ref_id");
    } else {
      if (id) return await usersSchema.findById(id);
      else
        return await usersSchema
          .find()
          .populate("pos_ref_id")
          .populate("group_ref_id");
    }
  }
  async post(data) {
    try {
      return await usersSchema.create(data);
    } catch (er) {
      return er;
    }
  }
  async put(id, data) {
    return await usersSchema.updateOne({ _id: id }, data);
  }
  async delete(id, data) {
    return await usersSchema.deleteOne({ _id: id });
  }
}
export default new UsersClass();
