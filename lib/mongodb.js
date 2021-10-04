import mongoose, { connection } from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

async function dbConnect() {
  if (connection.isConnected) {
    console.log('already connected');
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('use previous connection');
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(MONGODB_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('new connection');
  connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  if(connection.isConnected){
    if(process.env.NODE_ENV ==='production'){
      await mongoose.disconnect()
      connection.isConnected = false
    } else {
      console.log('not disconnected')
    }
  }
}
async function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}
const db = { dbConnect, disconnect, convertDocToObj};
export default db
