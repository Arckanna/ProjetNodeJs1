const path = require("path");

module.exports = {
  dbUrl: "mongodb+srv://Arcka:pointFinal@cluster1.i66lp.mongodb.net/twitter",
  cert: path.join(__dirname, ""),
  key: path.join(__dirname, ""),
  portHttp: 80,
  portHttps: 443,
};
