const checkUser = (req, res, next) => {
  if (req.user) {
    return next();
  }
  req.flash(`error`, `Sign in First`);
  return res.redirect(`/signin`);
};

module.exports = { checkUser };
