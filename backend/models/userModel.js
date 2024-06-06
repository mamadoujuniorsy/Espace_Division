const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: String
},
{
  timestamps: true
})
const userModel = mongoose.model("user", userSchema)

module.exports = userModel