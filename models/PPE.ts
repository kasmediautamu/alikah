import mongoose from 'mongoose'

const ppeSchema = new mongoose.Schema(
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
const PPE = mongoose.models.PPE || mongoose.model('PPE', ppeSchema)
export default PPE
