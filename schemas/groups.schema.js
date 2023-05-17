import { Schema, model, Types } from "mongoose";

const GroupsSchema = new Schema(
  {
    dir_ref_id: {
      type: Types.ObjectId,
      required: true,
      ref: "Directions",
    },
    begin_date: {
      type: Date,
      required: true,
      default: Date.now,
    },

    gr_number: {
      type: Number,
      required: true,
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
export default model("Groups", GroupsSchema);
