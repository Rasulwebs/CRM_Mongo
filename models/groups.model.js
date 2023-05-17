import groupsSchema from "../schemas/groups.schema.js";

class GroupsClass{
    async get(id) {
        if (id) return await groupsSchema.findById(id);
        else return await groupsSchema.find().populate("dir_ref_id")
      }
      async post(data) {
        try {
          return await groupsSchema.create(data);
        } catch (er) {
          return er;
        }
      }
      async put(id, data) {
        return await groupsSchema.updateOne({ _id: id }, data);
      }
      async delete(id, data) {
        return await groupsSchema.deleteOne({ _id: id });
      }

}
export default new GroupsClass()