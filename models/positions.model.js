import positionSchema from "../schemas/positions.schema.js";

class PositionClass{
    async get(id) {
        if (id) return await positionSchema.findById(id).populate("dep_ref_id")
        else return await positionSchema.find().populate("dep_ref_id")
      }
      async post(data) {
        try {
          return await positionSchema.create(data);
        } catch (er) {
          return er;
        }
      }
      async put(id, data) {
        return await positionSchema.updateOne({ _id: id }, data);
      }
      async delete(id, data) {
        return await positionSchema.deleteOne({ _id: id });
      }
}
export default new PositionClass()