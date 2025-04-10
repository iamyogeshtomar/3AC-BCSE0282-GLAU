const express = require(`express`);
const app = express();
const path = require(`path`);
const session = require(`express-session`);
const mongoose = require(`mongoose`);
const flash = require(`connect-flash`);
const MongoStore = require(`connect-mongo`);
const passport = require(`passport`);
const LocalStrategy = require(`passport-local`);
const User = require(`./Models/userSchema.js`);
const PORT = 3000;

(async () => {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/GetEmployed`);
    console.log(`Database connected successfully!!`);
  } catch (error) {
    console.log(error);
  }
})();

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: `keyboard dog`,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: `mongodb://127.0.0.1:27017/GetEmployed`,
    }),
  })
);

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static(path.resolve(__dirname, `views`)));

app.use((req, res, next) => {
  res.locals.currentUser = req.user || null;
  res.locals.success = req.flash(`success`);
  res.locals.error = req.flash(`error`);
  res.locals.warning = req.flash(`warning`);
  next();
});

app.use(`/job`, require(`./Routes/jobRoutes.js`));
app.use(require(`./Routes/userRoutes.js`));

app.get(`/`, (req, res) => {
  return res.redirect(`/job`);
  // res.send(`<h1>Server is working fine!!!</h1>`);
});

app.get(`/verify`, (req, res) => {
  console.log(req.session.user);
  res.redirect(`back`);
  // return res.redirect(`/job`);
  // res.send(`<h1>hello world</h1>`);
  // res.send(`<h1>hello world</h1>`);
  // console.log(`Verification complete!!!`);
  // res.send(`<h1>Server is working fine!!!</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is working on http://127.0.0.1:${PORT}`);
});
