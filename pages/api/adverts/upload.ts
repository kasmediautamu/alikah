import nextConnect from 'next-connect';
import { isAuth} from '../../../utils/auth';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';
import { NextApiRequest, NextApiResponse } from 'next';

const uploadfiles = require('../../../utils/multer')

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloudinary_url:process.env.CLOUDINARY_URL
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nextConnect();
const upload = multer();
//isAuth to be added on production
handler.use(upload.single('image')).post(async (req:NextApiRequest,res:NextApiResponse) => {
  const streamUpload = (req) => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream((error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      });
      streamifier.createReadStream(req.file.buffer).pipe(stream);
    });
  };
  const result:any = await streamUpload(req);
  console.log(result.secure_url)
  res.send(result);
});


export default handler;
