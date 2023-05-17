import directionsSchema from "../schemas/directions.schema.js";

class DirectsClass{
    async get(id) {
        if (id) return await directionsSchema.findById(id).populate("dep_ref_id");
        else return await directionsSchema.find().populate("dep_ref_id")
      }
      async post(data) {
        try {
          return await directionsSchema.create(data);
        } catch (er) {
          return er;
        }
      }
      async put(id, data) {
        return await directionsSchema.updateOne({ _id: id }, data);
      }
      async delete(id, data) {
        return await directionsSchema.deleteOne({ _id: id });
      }

}
export default new DirectsClass()