import User from "./userModel.js";
import Admin from "./AdminModel.js";

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
          "https://scholarship-form-birla-4vuq.vercel.app"
        )
        .status(200)
        .json({ success: true, message: "User logged in successfully" });
    } else {
      res.status(400).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    req.status(400).json({
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
