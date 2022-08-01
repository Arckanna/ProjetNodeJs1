const router = require("express").Router();
const actus = require("./actus.routes");
const users = require("./users.routes");
const auth = require("/auth.routes");

router.use("/actu", actus);
router.use("/users", users);
router.use("/auth", auth);

router.get("/", (req, res) => {
  res.redirect("/actu");
});

module.exports = router;
