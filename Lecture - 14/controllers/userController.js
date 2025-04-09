const User = require(`../Models/userSchema.js`);
const bcryptjs = require(`bcryptjs`);

const getSignup = (req, res) => {
  res.render(`signUpForm.ejs`);
};

const postSignup = async (req, res) => {
  const { name, email, dob, phone, password } = req.body;
  const hash = await bcryptjs.hash(password, 10);
  await User.create({
    name,
    email,
    dob,
    phone,
    password: hash,
  });
  req.flash(`success`, `Signed up successfully!!!`);
  res.redirect(`/signin`);
};

const getSignin = (req, res) => {
  res.render(`signinUser.ejs`);
};

const postSignin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  // console.log(user);
  if (!user) {
    req.flash(`error`, `User not found!!!`);
    return res.redirect(`/signin`);
  }
  const checkPassword = await bcryptjs.compare(password, user.password);
  if (!checkPassword) {
    req.flash(`error`, `Incorrect credentials!!!`);
    return res.redirect(`/signin`);
  }
  req.session.user = user;
  req.flash(`success`, `Welcome ${user.name}!!!`);
  return res.redirect(`/job`);
};

module.exports = { getSignup, postSignup, getSignin, postSignin };
