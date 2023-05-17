import { Schema, model, Types } from "mongoose";

const UsersSchema = new Schema(
  {
    pos_ref_id: {
      type: Types.ObjectId,
      required: true,
      ref: "Positions",
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    come_date: {
      type: Date,
      default: Date.now,
      required: true,
    },
    left_date: {
      type: Date,
      default: null,
    },
    group_ref_id: {
      type: Types.ObjectId,
      ref: "Groups",
    },
  },
  {
    timestamps: {
      createdAt: "create_at",
    },
  }
);
export default model("Users", UsersSchema);
