import mongoose from 'mongoose'
const reportSchema = new mongoose.Schema(
  {
  senderId:{
    type:String,
    required:true
  },
  advertId:{
    type:String,
    required:true
  },
  message:{
    subject:{
      type: String,
      required: true,
    },
    body:{
      type: String,
      required: true,
    }
  }
  },
  { timestamps: true }
)
const Reports = mongoose.models.Reports || mongoose.model('Reports', reportSchema)
export default Reports
