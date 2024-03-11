// user.js
const Mongoose = require("mongoose")
const UserSchema = new Mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
  role: {
    type: String,
    default: "Basic",
    required: true,
  },
})

const User = Mongoose.model("user", UserSchema)
module.exports = User
//You've created the user model by passing the UserSchema as the second argument
// while the first argument is the name of the model user.