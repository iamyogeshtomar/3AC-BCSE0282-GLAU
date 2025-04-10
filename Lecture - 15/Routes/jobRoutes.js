const express = require(`express`);
const router = express.Router();
const {
  showAllJobs,
  showNewJobForm,
  submitNewJobForm,
  showSignUpForm,
} = require(`../controllers/jobController.js`);
const {
  checkUser,
  checkCompany,
} = require("../middlewares/mainMiddlewares.js");

router.get(`/`, showAllJobs);

router.get(`/new`, checkUser, checkCompany, showNewJobForm);

router.post(`/new`, checkUser, checkCompany, submitNewJobForm);

router.get(`/signup`, showSignUpForm);

module.exports = router;
