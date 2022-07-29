const router = require("express").Router();
const Actu = require("../database/models/actu.model");

router.post("/", (req, res) => {
  const body = req.body;
  const newActu = new Actu(body);
  newActu
    .save()
    .then((newActu) => res.redirect("/"))
    .catch((err) => {
      const errors = Object.keys(err.errors).map(
        (key) => err.errors[key].message
      );
      res.status(400).render("actu/actu-form", { errors });
    });
});

module.exports = router;
