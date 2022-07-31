const mongoose = require("mongoose");
const schema = mongoose.Schema;

const actuSchema = schema({
  username: { type: String, require: true },
  local: {
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
});

const User = mongoose.model("user", actuSchema);

module.exports = User;
