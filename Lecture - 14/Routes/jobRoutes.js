const express = require(`express`);
const router = express.Router();
const {
  showAllJobs,
  showNewJobForm,
  submitNewJobForm,
  showSignUpForm,
} = require(`../controllers/jobController.js`);

router.get(`/`, showAllJobs);

router.get(`/new`, showNewJobForm);

router.post(`/new`, submitNewJobForm);

router.get(`/signup`, showSignUpForm);

module.exports = router;
