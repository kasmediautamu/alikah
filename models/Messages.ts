import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema(
  {
  senderId:{
    type:String,
    required:true
  },
  receipientId:{
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
const Messages = mongoose.models.Messages || mongoose.model('Messages', messageSchema)
export default Messages
