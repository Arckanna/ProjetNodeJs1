const router = require("express").Router();
const actus = require("./api.actu");

router.use("/actu", actus);

module.exports = router;
