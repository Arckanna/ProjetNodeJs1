const mongoose = require("mongoose");
const schema = mongoose.Schema;

const actuSchema = schema({
  content: {
    type: String,
    maxlength: [140, "Actu trop longue"],
    minlength: [10, "trop court"],
    required: [true, "requis"],
  },
});

const Actu = mongoose.model("actu", actuSchema);

module.exports = Actu;
