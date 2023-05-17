import { Schema, model, Types } from "mongoose";
const CentreSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    close_at: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: {
      createdAt: "open_date",
    },
  }
);
export default model("Center", CentreSchema);
