import mongoose, { Schema } from "mongoose";
const admin = new Schema({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Admin = mongoose.model("Admin", admin);
export default Admin;
