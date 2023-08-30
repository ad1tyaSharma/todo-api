const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
  //console.log(req.body);
  const {email, password } = req.body;
  const hashedPwd = await bcrypt.hash(password, 10);
  try {
    const response = await User.create({
      
      email,
      password: hashedPwd,
      
    });
    //console.log("User created successfully: ", response);
  } catch (error) {
    if (error.code === 11000) {
      // duplicate key
      return res.status(400).json({
        error: "User Alreasy Exists",
      });
    }
    throw error;
  }
res.json({
    message: "Account has been created",
  });
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        //console.log({body:req.body,user});
        if (!user || !await bcrypt.compare(password, user.password)) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        const token = await jwt.sign(
                    {
                      id: user._id,
                      email: user.email,
                      firstName: user.firstName,
                      lastName: user.lastName,
                      image: user.profilePic,
                    },
                    process.env.JWT_SECRET,
                    { expiresIn: '7d' }
                  );
                  //console.log(token);
        res.status(200).json({ token,userId : user._id });
      } catch (error) {
        res.status(500).json({ message: 'Error logging in' });
      }
};

exports.getUser = async(req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user details' });
  }
};