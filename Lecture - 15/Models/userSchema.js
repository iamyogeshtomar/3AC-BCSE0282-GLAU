const { Schema, model } = require(`mongoose`);
const passportLocalMongoose = require(`passport-local-mongoose`);

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      unique: true,
      type: String,
      trim: true,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: [`Male`, `Female`],
    },
    role: {
      type: String,
      enum: [`Company`, `Applicant`],
      default: `Applicant`,
    },
  },
  {
    timestamps: true,
    updatedAt: [{ type: Date }],
  }
);

userSchema.plugin(passportLocalMongoose);

module.exports = new model(`User`, userSchema);
