import { Schema, model, Types } from "mongoose";

const DepartmentSchema = new Schema(
  {
    center_ref_id: {
      type: Types.ObjectId,
      required: true,
      ref: "Center",
    },
    dep_name: {
      type: String,
      required: true,
    },
    delete_at: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: {
      createdAt: "create_at",
    },
  }
);

export default model("Department", DepartmentSchema);
