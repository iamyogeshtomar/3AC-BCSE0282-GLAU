const User = require(`../Models/userSchema.js`);
const bcryptjs = require(`bcryptjs`);
const passport = require(`passport`);

const getSignup = (req, res) => {
  res.render(`signUpForm.ejs`);
};

const postSignup = async (req, res) => {
  const { username, name, email, dob, phone, password } = req.body;
  const user = new User({ username, name, email, dob, phone });
  const newUser = await User.register(user, password);
  // const hash = await bcryptjs.hash(password, 10);
  // await User.create({
  //   name,
  //   email,
  //   dob,
  //   phone,
  //   password: hash,
  // });
  req.flash(`success`, `Signed up successfully!!!`);
  res.redirect(`/signin`);
};

const getSignin = (req, res) => {
  res.render(`signinUser.ejs`);
};

const postSignin = passport.authenticate(`local`, {
  failureRedirect: `/signin`,
  successRedirect: `/job`,
});

const logoutUser = (req, res) => {
  req.logout((err) => {
    if (err) return console.log(err);
  });
  req.flash(`success`, `logged out successfully`);
  res.redirect(`/job`);
};

// const postSignin = async (req, res) =>
// {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email: email });
//   // console.log(user);
//   if (!user) {
//     req.flash(`error`, `User not found!!!`);
//     return res.redirect(`/signin`);
//   }
//   const checkPassword = await bcryptjs.compare(password, user.password);
//   if (!checkPassword) {
//     req.flash(`error`, `Incorrect credentials!!!`);
//     return res.redirect(`/signin`);
//   }
//   req.session.user = user;
//   req.flash(`success`, `Welcome ${user.name}!!!`);
//   return res.redirect(`/job`);
// };

module.exports = { getSignup, postSignup, getSignin, postSignin, logoutUser };
