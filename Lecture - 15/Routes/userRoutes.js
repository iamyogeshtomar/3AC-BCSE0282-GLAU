const express = require(`express`);
const router = express.Router();
const {
  getSignup,
  postSignup,
  getSignin,
  postSignin,
  logoutUser,
} = require(`../controllers/userController.js`);

router.get(`/signup`, getSignup);

router.post(`/signup`, postSignup);

router.get(`/signin`, getSignin);

router.post(`/signin`, postSignin);

router.get (`/logout`, logoutUser);

module.exports = router;
