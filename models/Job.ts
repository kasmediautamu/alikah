import mongoose from 'mongoose'

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: false,
    },
    userId: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: false,
      max: 100,
    },
    advertisedBy: {
      type: String,
      required: false,
    },
    websiteLink: {
      type: String,
      required: false,
    },
    companyName: {
      type: String,
      required: false,
    },
    employmentEquity: {
      type: String,
      required: false,
    },
    subcategory: {
      type: String,
      required: true,
      max: 100,
    },
    description: {
      type: String,
      required: true,
      max: 500,
      unique: false,
    },
    imageURL: {
      type: Array,
      default: [],
      unique: false,
      required: false,
    },
    country: {
      type: String,
      required: true,
      max: 100,
      unique: false,
    },
    price: {
      type: String,
      required: false,
      max: 200,
    },
    subscriptionType: {
      type: String,
      required: true,
      default: 'standard',
    },
    isPaid: {
      type: Boolean,
      default: false,
      required: true,
    },
    subscriptionPrice: {
      type: String,
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: false,
      required: true,
    },
    address: {
      province: {
        type: String,
        required: true,
        max: 50,
      },
      city: {
        type: String,
        required: false,
        max: 50,
      },
      phoneNumber: {
        type: String,
        required: false,
        max: 25,
      },
    },
  },
  { timestamps: true }
)
const Job = mongoose.models.Job || mongoose.model('Job', jobSchema)
export default Job
