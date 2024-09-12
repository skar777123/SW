import mongoose, { Schema } from "mongoose";

const user = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    DOB: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    courseFee: {
      type: String,
      required: true,
    },
    feeReceipt: {
      type: String,
      required: true,
    },
    studentId: {
      type: String,
      required: true,
      unique: true,
    },
    previousMarks: {
      type: String,
      required: true,
    },
    curricular: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    aadhar: {
      type: String,
      required: true,
    },
    caste: {
      type: String,
      required: true,
    },
    fatherOcc: {
      type: String,
      required: true,
    },
    motherOcc: {
      type: String,
      required: true,
    },
    Income: {
      type: String,
      required: true,
    },
    IncomeUpload: {
      type: String,
      required: true,
    },
    OtherFoS: {
      type: String,
      required: true,
    },
    OtherFoSyes: {
      type: String,
      required: true,
    },
    financeAssist: {
      type: String,
      required: true,
    },
    bankName: {
      type: String,
      required: true,
    },
    bankAccNo: {
      type: String,
      required: true,
    },
    bankIFSC: {
      type: String,
      required: true,
    },
    bankBranch: {
      type: String,
      required: true,
    },
    bankUpload: {
      type: String,
      required: true,
    },
    ReHOD: {
      type: String,
      required: true,
    },
    ReVP: {
      type: String,
      required: true,
    },
    ReDoP: {
      type: String,
      required: true,
    },
    attendance1: {
      type: String,
      required: true,
    },
    attendance2: {
      type: String,
      required: true,
    },
    eleBill: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Data", user);
export default User;
