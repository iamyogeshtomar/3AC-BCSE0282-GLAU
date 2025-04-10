const checkUser = (req, res, next) => {
  if (req.user) {
    return next();
  }
  req.flash(`error`, `Sign in First`);
  return res.redirect(`/signin`);
};

const checkCompany = (req, res, next) => {
  if (req.user.role === `Applicant`) {
    req.flash(`error`, `Applicant cannot post jobs`);
    return res.redirect(`/job`);
  }
  return next();
};

module.exports = { checkUser, checkCompany };
