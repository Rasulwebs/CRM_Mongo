import centreSchema from "../schemas/centre.schema.js";

class CentreClass{
    async get(id) {
        if (id) return await centreSchema.findById(id);
        else return await centreSchema.find()
      }
      async post(data) {
        try {
          return await centreSchema.create(data);
        } catch (er) {
          return er;
        }
      }
      async put(id, data) {
        return await centreSchema.updateOne({ _id: id }, data);
      }
      async delete(id, data) {
        return await centreSchema.deleteOne({ _id: id });
      }

}
export default new CentreClass()