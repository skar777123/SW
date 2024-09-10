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
    res.status(200).json({
      success: true,
      message: "User created successfully",
      user,
    }).setHeader(
"Access-Control-Allow-Origin",
"https://scholarship-doi-birla.vercel.app/"
).setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  ).setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  ).setHeader("Access-Control-Allow-Credentials", true);
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
    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      user,
    }).setHeader(
"Access-Control-Allow-Origin",
"https://scholarship-doi-birla.vercel.app/"
).setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  ).setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  ).setHeader("Access-Control-Allow-Credentials", true);
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
        .status(200)
        .json({ success: true, message: "User logged in successfully" }).setHeader(
"Access-Control-Allow-Origin",
"https://scholarship-doi-birla.vercel.app/"
).setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  ).setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  ).setHeader("Access-Control-Allow-Credentials", true);
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
      res.status(201).json({
        success: true,
        message: "User created successfully",
      }).setHeader(
"Access-Control-Allow-Origin",
"https://scholarship-doi-birla.vercel.app/"
).setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  ).setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  ).setHeader("Access-Control-Allow-Credentials", true);
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
