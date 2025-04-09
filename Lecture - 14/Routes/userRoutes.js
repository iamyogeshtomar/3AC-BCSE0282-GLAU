const express = require(`express`);
const router = express.Router();
const {
  getSignup,
  postSignup,
  getSignin,
  postSignin,
} = require(`../controllers/userController.js`);

router.get(`/signup`, getSignup);

router.post(`/signup`, postSignup);

router.get(`/signin`, getSignin);

router.post(`/signin`, postSignin);

module.exports = router;
