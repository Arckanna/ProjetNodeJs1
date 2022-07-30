const router = require("express").Router();
const {
  actuList,
  actuNew,
  actuCreate,
  actuDelete,
  actuEdit,
} = require("../controllers/actus.controller");
const Actu = require("../database/models/actu.model");

router.get("/", actuList);

router.get("/new", actuNew);

router.post("/", actuCreate);

router.get("/edit/:actuId", actuEdit);

router.delete("/:actuId", actuDelete);

module.exports = router;
