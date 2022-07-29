const {
  getActus,
  createActu,
  deleteActu,
} = require("../queries/actus.queries");

exports.actuList = async (req, res, next) => {
  try {
    const actus = await getActus();
    res.render("actu/actu", { actus });
  } catch (e) {
    next(e);
  }
};

exports.actuNew = (req, res, next) => {
  res.render("actu/actu-form", { actu: {} });
};

exports.actuCreate = async (req, res, next) => {
  try {
    const body = req.body;
    await createActu(body);
    res.redirect("/actu");
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    res.status(400).render("actu/actu-form", { errors });
  }
};

exports.actuDelete = async (req, res, next) => {
  try {
    const actuId = req.params.actuId;
    await deleteActu(actuId);
    const actus = await getActus();
    res.render("actu/actu-list", { actus });
  } catch (e) {
    next(e);
  }
};
