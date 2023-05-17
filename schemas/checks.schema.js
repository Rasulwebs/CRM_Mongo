import { Schema, model, Types } from "mongoose";
const CheksSchema = new Schema(
  {
    gr_ref_id: {
      type: Types.ObjectId,
      required: true,
      ref: "Groups",
    },
    user_ref_id: {
      type: Types.ObjectId,
      required: true,
      ref: "Users",
    },

    not_in_class: [
      {
        type: String,
        required:true
      },
    ],
  },
  {
    timestamps: {
      createdAt: "add_date",
    },
  }
);
export default model("Cheks", CheksSchema);
