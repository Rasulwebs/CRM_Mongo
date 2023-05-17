import { Schema, model, Types } from "mongoose";

const DirectionsSchema = new Schema(
  {
    dep_ref_id: {
      type: Types.ObjectId,
      required: true,
      ref: "Department",
    },
    dir_name: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    end_date: {
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
export default model("Directions", DirectionsSchema);
