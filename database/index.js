const mongoose = require("mongoose");

mongoose
  .connect(
   ????
  )
  .then(() => console.log("connexion db ok"))
  .catch((err) => console.log(err));
