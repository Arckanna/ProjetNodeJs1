const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Arcka:aze123@cluster1.i66lp.mongodb.net/twitter?retryWrites=true&w=majority"
  )
  .then(() => console.log("connexion db ok"))
  .catch((err) => console.log(err));
