import mongoose from 'mongoose'
const userSchema = new mongoose.Schema (
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    phoneNumber: {
      type:String,
      max:25,
      required: false
    },

    profilePicture: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    city: {
      type: String,
      max: 50,
    }
  },
  { timestamps: true }
)
const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User
