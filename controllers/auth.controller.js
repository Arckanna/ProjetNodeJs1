const passport = require("passport");

exports.signinForm = (req, res, next) => {
  res.render("auth/signin-form", { errors: null });
  try {
  } catch (e) {}
};
exports.signin = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      next(err);
    } else if (!user) {
      res.render("auth/auth-form", { errors: [info.messge] });
    } else {
      req.login(user, (err) => {
        if (err) {
          next(err);
        } else {
          res.redirect("/actu");
        }
      });
    }
  });

  try {
  } catch (e) {}
};
exports.signout = (req, res, next) => {
  req.logout();
  res.redirect("/auth/signin/form");
  try {
  } catch (e) {}
};
