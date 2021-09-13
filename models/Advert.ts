import mongoose from 'mongoose'

const advertSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true
    },
    title: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: false,
    },
    category: {
      type: String,
      required: true,
      max: 100,
      unique: false,
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
      type: Number,
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: false,
      required: true,
    },
    Address: {
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
      phone: {
        type: String,
        required: false,
        max: 25,
      },
    },
  },
  { timestamps: true }
)
const Advert = mongoose.models.Advert || mongoose.model('Advert', advertSchema)
export default Advert
