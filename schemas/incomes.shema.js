import { Schema, model, Types } from "mongoose";
const IncomesSchema = new Schema(
  {
    user_ref_id: {
      type: String,
      required: true,
      ref: "Users",
    },
    reason: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required:true
    },
  },
  {
    timestamps: {
      createdAt: "inc_date",
    },
  }
);
export default model("Incomes", IncomesSchema);
