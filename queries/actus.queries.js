const Actu = require("../database/models/actu.model");

exports.getActus = () => {
  return Actu.find({}).exec();
};

exports.createActu = (actu) => {
  const newActu = new Actu(actu);
  return newActu.save();
};

exports.deleteActu = (actuId) => {
  return Actu.findByIdAndDelete(actuId).exec();
};

exports.getActu = (actuId) => {
  return Actu.findOne({ _id: actuId }).exec();
};

//exports.updateActu = actuId);