const { Schema, model } = require(`mongoose`);

const jobSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    package: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      default: `No Description available!!!`,
    },
    requirements: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
    updatedAt: [{ type: Date }],
  }
);

module.exports = new model(`Job`, jobSchema);
