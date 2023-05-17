import departmentSchema from "../schemas/department.schema.js";
import positionSchema from "../schemas/positions.schema.js";
import directionsSchema from "../schemas/directions.schema.js";
class DepartmentClass {
  async get(id, query) {
    if (query.positions) {
      return await positionSchema
        .find({
          pos_name: query.positions,
        })
        .populate("dep_ref_id");
    } else if (query.directions) {
      return await directionsSchema
        .find({
          dir_name: query.directions,
        })
        .populate("dep_ref_id");
    } else {
      if (id) return await departments.findById(id);
      else return await departmentSchema.find().populate("center_ref_id");
    }
  }
  async post(data) {
    try {
      return await departmentSchema.create(data);
    } catch (er) {
      return er;
    }
  }
  async put(id, data) {
    return await departmentSchema.updateOne({ _id: id }, data);
  }
  async delete(id, data) {
    return await departmentSchema.deleteOne({ _id: id });
  }
}
export default new DepartmentClass();
