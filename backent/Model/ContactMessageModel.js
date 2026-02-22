import mongoose from "mongoose";

const ContactMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 120,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 2000,
    },
  },
  { timestamps: true },
);

// Fast sorting for "latest messages first" in admin.
ContactMessageSchema.index({ createdAt: -1 });

export default mongoose.model("ContactMessage", ContactMessageSchema);
