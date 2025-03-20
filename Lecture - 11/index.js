const express = require(`express`);
const app = express();
const path = require(`path`);
const session = require(`express-session`);
const cookieParser = require(`cookie-parser`);
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, `views`)));
app.use(cookieParser());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true },
  })
);

app.get(`/`, (req, res) => {
  res.send(`<h1>Server is working fine!!!</h1>`);
});

app.get(`/cookie/:name/:age/:place`, (req, res) => {
  const { name, age, place } = req.params;
  res.cookie(`name`, name);
  res.cookie(`age`, age);
  res.cookie(`place`, place);
  res.cookie(`isLoggedIn`, `false`);
  res.send(`<h1>Cookies stored successfully!</h1>`);
});

app.get(`/verify`, (req, res) => {
  const cookie = req.cookies;
  console.log(cookie);
  if (cookie) {
    res.send(
      `<h1>My name is ${cookie.name}, and I'm ${cookie.age} years old, and I'm from ${cookie.place}</h1>`
    );
  } else {
    res.send(`<h1>Get cookies first!!!</h1>`);
  }
});

app.get(`/session`, (req, res) => {
  console.log(req.session);
  const username = "Ashish";
  if (req.session.username === req.body.username){};
  res.send(`<h1>Session</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is working on http://127.0.0.1:${PORT}`);
});
