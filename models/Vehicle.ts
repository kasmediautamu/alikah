import mongoose from 'mongoose'

const vehicleSchema = new mongoose.Schema(
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
    condition: {
      type: String,
      required: false,
    },

    forSaleBy: {
      type: String,
      required: false,
    },
    make: {
      type: String,
      required: false,
    },
    model: {
      type: String,
      required: false,
    },
    transmission: {
      type: String,
      required: false,
    },
    bodyType: {
      type: String,
      required: false,
    },
    year: {
      type: String,
      required: false,
    },
    kilometers: {
      type: String,
      required: false,
    },
    enginedisplacement: {
      type: String,
      required: false,
    },
    colour: {
      type: String,
      required: false,
    },
    fuelType: {
      type: String,
      required: false,
    },

    websiteLink: {
      type: String,
      required: false,
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
const Vehicle = mongoose.models.vehicleSchema || mongoose.model('Vehicle', vehicleSchema)
export default Vehicle
