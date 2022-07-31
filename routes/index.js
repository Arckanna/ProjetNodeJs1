const router = require("express").Router();
const actus = require("./actus.routes");
const users = require("./users.routes");

router.use("/actu", actus);
router.use("/users", users);

router.get("/", (req, res) => {
  res.redirect("/actu");
});

module.exports = router;
