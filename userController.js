import User from "./userModel.js";
import Admin from "./AdminModel.js";
import { Parser } from "json2csv";
import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();

export const Data = async (req, res) => {
  const {
    name,
    department,
    course,
    courseFee,
    DOB,
    feeReceipt,
    studentId,
    previousMarks,
    curricular,
    mobile,
    email,
    address,
    aadhar,
    caste,
    fatherOcc,
    motherOcc,
    Income,
    IncomeUpload,
    OtherFoS,
    OtherFoSyes,
    financeAssist,
    bankName,
    bankAccNo,
    bankIFSC,
    bankBranch,
    bankUpload,
    ReHOD,
    ReDoP,
    attendance1,
    attendance2,
    eleBill,
  } = req.body;
  try {
    const user = await User.create({
      name,
      department,
      course,
      courseFee,
      DOB,
      feeReceipt,
      studentId,
      previousMarks,
      curricular,
      mobile,
      email,
      address,
      aadhar,
      caste,
      fatherOcc,
      motherOcc,
      Income,
      IncomeUpload,
      OtherFoS,
      OtherFoSyes,
      financeAssist,
      bankName,
      bankAccNo,
      bankIFSC,
      bankBranch,
      bankUpload,
      ReHOD,
      ReDoP,
      attendance1,
      attendance2,
      eleBill,
    });
    res
      .header(
        "Access-Control-Allow-Origin",
        "https://scholarship-form-birla-4vuq.vercel.app/"
      )
      .status(200)
      .json({
        success: true,
        message: "User created successfully",
        user,
      });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const fetch = async (req, res) => {
  try {
    const user = await User.find();
    res
      .header(
        "Access-Control-Allow-Origin",
        "https://scholarship-form-birla-4vuq.vercel.app/"
      )
      .status(200)
      .json({
        success: true,
        message: "User fetched successfully",
        user,
      });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await Admin.findOne({ name });

    if (user.password == password) {
      res
        .header(
          "Access-Control-Allow-Origin",
          "https://scholarship-form-birla-4vuq.vercel.app/"
        )
        .status(200)
        .json({ success: true, message: "User logged in successfully" });
    } else {
      res.status(400).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const register = async (req, res) => {
  const { name, password } = req.body;
  try {
    const admin = await Admin.create({ name, password });
    if (admin) {
      res
        .header(
          "Access-Control-Allow-Origin",
          "https://scholarship-form-birla-4vuq.vercel.app/"
        )
        .status(201)
        .json({
          success: true,
          message: "User created successfully",
        });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await User.findByIdAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      message: "User deleted",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const File = async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    const fields = [
      "name",
      "program",
      "DOB",
      "courseFee",
      "feeReceipt",
      "studentId",
      "previousMarks",
      "curricular",
      "mobile",
      "email",
      "address",
      "aadhar",
      "caste",
      "fatherOcc",
      "motherOcc",
      "Income",
      "IncomeUpload",
      "OtherFoS",
      "OtherFoSyes",
      "financeAssist",
      "bankName",
      "bankAccNo",
      "bankIFSC",
      "bankBranch",
      "bankUpload",
      "ReHOD",
      "ReDoP",
      "attendance1",
      "attendance2",
      "eleBill",
    ];

    const parser = new Parser({ fields });
    const csv = await parser.parse(users);
    res
      .header(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      )
      .attachment("Scholarship-submited-data.csv")
      .status(200)
      .send(csv);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


export const Approve = async (req, res) => {
  const number = req.body.number;
  const accountSid = process.env.SID;
  const authToken = process.env.TK;
  try {
    const client = twilio(accountSid, authToken);
    client.messages.create({
      body: `B.K.Birla College,Kalyan               Your Scholarship Application has been Approved.We will soon Notify the Further Process`,
      from: process.env.NUM,
      to: "+91" + number,
    });
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
