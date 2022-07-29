const router = require("express").Router();
const api = require("./api");
const Actu = require("../database/models/actu.model");

router.use("/api", api);

router.get("/actu/new", (req, res) => {
  res.render("actu/actu-form");
});

router.get("/", (req, res) => {
  Actu.find({})
    .exec()
    .then((actus) => res.render("actu/actu-list", { actus }));
});

module.exports = router;
