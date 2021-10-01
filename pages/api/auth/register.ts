import { NextApiRequest, NextApiResponse } from "next";
import db from '../../../lib/mongodb'
import  User from '../../../models/User'
import nc from 'next-connect'
import bcrypt from 'bcryptjs'
import { signToken } from "../../../utils/auth";

const handler = nc();

handler.post(async(req:NextApiRequest,res:NextApiResponse) =>{
  await db.dbConnect()
  const olduser = await User.findOne({ email: req.body.email });

  const newUser = new User({
    name:req.body.name,
    email: req.body.email,
    password:bcrypt.hashSync(req.body.password),
    profilePicture: req.body.profilePicture ? req.body.profilePicture : '',
    isAdmin:false
  })

  const user = await newUser.save();
  await db.disconnect()
  const token = signToken(user);
  res.send({
    token,
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin
  })

})

export default handler
