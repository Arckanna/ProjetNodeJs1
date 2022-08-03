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

exports.updateActu = (actuId, actu) => {
  return Actu.findByIdAndUpdate(
    actuId,
    {
      $set: actu,
    },
    { runValidators: true }
  );
};

exports.getCurrentUserActusWithFollowing = (user) => {
  return Actu.find({
    author: { $in: [...user.following, user._id] },
  })
    .populate("author")
    .exec();
};

exports.getUserActusFormAuthorId = (authorId) => {
  return Tweet.find({ author: authorId }).populate("author").exec();
};
