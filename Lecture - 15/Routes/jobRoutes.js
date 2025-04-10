const express = require(`express`);
const router = express.Router();
const {
  showAllJobs,
  showNewJobForm,
  submitNewJobForm,
  showSignUpForm,
} = require(`../controllers/jobController.js`);
const { checkUser } = require("../middlewares/mainMiddlewares.js");

router.get(`/`, showAllJobs);

router.get(`/new`, checkUser, showNewJobForm);

router.post(`/new`, checkUser, submitNewJobForm);

router.get(`/signup`, showSignUpForm);

module.exports = router;
