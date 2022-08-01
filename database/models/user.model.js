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

userSchema.statics.hashPassword = function (password) {
  return bcrypt.hash(password, 12);
};

userSchema.methods.comparePassword = (password) => {
  return bcrypt.compare(password, this.local.password);
};
const User = mongoose.model("user", userSchema);

module.exports = User;
