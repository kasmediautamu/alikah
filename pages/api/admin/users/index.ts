import nc from 'next-connect';
import { isAdmin, isAuth } from '../../../../utils/auth';
import User from '../../../../models/User';
import { NextApiRequest, NextApiResponse } from "next";
import db from '../../../../lib/mongodb'

const handler = nc();
handler.use(isAuth, isAdmin);

handler.get(async (req:NextApiRequest, res:NextApiResponse) => {
  await db.dbConnect();
  const users = await User.find({});
  await db.disconnect();
  res.send(users);
});

export default handler;
