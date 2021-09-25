import nc from 'next-connect'
import bcrypt from 'bcryptjs'
import User from '../../../models/User'
import db from '../../../lib/mongodb'
import { signToken } from '../../../utils/auth'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = nc();

handler.post(async (req:NextApiRequest,res:NextApiResponse) => {
  await db.dbConnect();
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    phoneNumber:req.body.phoneNumber,
    isAdmin: false,
  });
  const user = await newUser.save();
  await db.disconnect();

  const token = signToken(user);
  res.send({
    token,
    _id: user._id,
    username: user.username,
    email: user.email,
    phoneNumber:user.phoneNumber,
    isAdmin: user.isAdmin,
  });
});

export default handler;
