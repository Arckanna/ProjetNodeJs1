const mongoose = require("mongoose");
const schema = mongoose.Schema;

const actuSchema = schema({
  content: {
    type: String,
    maxlength: [250, "Actu trop longue"],
    minlength: [10, "trop court"],
    required: [true, "requis"],
  },
  author: { type: schema.Types.ObjectId, ref: "user", required: true },
});

const Actu = mongoose.model("actu", actuSchema);

module.exports = Actu;
