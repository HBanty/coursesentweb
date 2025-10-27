import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    select: false, // Don't return password by default in queries
  },
}, {
  timestamps: true, // Add createdAt and updatedAt
});

// Create index on email for faster queries
adminSchema.index({ email: 1 });

export const Admin = mongoose.model("Admin", adminSchema);
