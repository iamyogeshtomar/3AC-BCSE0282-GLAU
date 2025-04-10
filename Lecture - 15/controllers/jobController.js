const Job = require(`../Models/jobSchema.js`);

const showAllJobs = async (req, res) => {
  const allJobs = await Job.find();
  res.render(`index.ejs`, { allJobs });
};

const showNewJobForm = (req, res) => {
  res.render(`newJobForm.ejs`);
};

const submitNewJobForm = async (req, res) => {
  const { title, companyName, package, description, requirements } = req.body;
  await Job.create({ title, companyName, package, description, requirements });
  res.redirect(`/job`);
};

const showSignUpForm = (req, res) => {
  res.render(`signUpForm.ejs`);
};

const submitSignUpForm = async(req, res)=>{
  const {name, email, dob, phone, password} = req.body;
  
}

module.exports = {
  showAllJobs,
  showNewJobForm,
  submitNewJobForm,
  showSignUpForm,
};
