const router = require("express").Router();
const actus = require("./actus");

router.use("/actu", actus);

router.get("/", (req, res) => {
  res.redirect("/actu");
});

module.exports = router;
