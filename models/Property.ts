import mongoose from 'mongoose'

const propertySchema = new mongoose.Schema(
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
    },
    availableFrom: {
      type: String,
      required: false,
    },
    availableTo: {
      type: String,
      required: false
    },
    dwellingType: {
      type: String,
      required: false,
    },
    bedRooms: {
      type: String,
      required: false
    },
    shareBasis: {
      type: String,
      required: false
    },
    parking: {
      type: String,
      required: false
    },
    bathrooms: {
      type: String,
      required: false
    },
    size: {
      type: String,
      required: false
    },
    petFriendly: {
      type: String,
      required: false
    },
    smoking: {
      type: String,
      required: false
    },
    prefferedGender: {
      type: String,
      required: false
    },
    furnished: {
      type: String,
      required: false
    },
    minimumNights: {
      type: String,
      required: false
    },
    forRentBy: {
      type: String,
      required: false,
      max: 100,
    },
    forSaleBy: {
      type: String,
      required: false,
      max: 100,
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
const Property = mongoose.models.Property || mongoose.model('Property', propertySchema)
export default Property
