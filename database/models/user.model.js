const mongoose = require("mongoose");
const schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = schema({
  username: { type: String, require: true },
  local: {
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
});

userSchema.statics.hashPassword = (password) => {
  return bcrypt.hash(password, 12);
};

const User = mongoose.model("user", userSchema);

module.exports = User;
