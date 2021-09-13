import nc from 'next-connect';
import User from '../../../../../models/User';
import db from '../../../../../lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { isAdmin, isAuth } from '../../../../../utils/auth';

const handler = nc();
handler.use(isAuth, isAdmin);

handler.get(async (req:NextApiRequest, res:NextApiResponse) => {
  await db.connect();
  const user = await User.findById(req.query.id);
  await db.disconnect();
  res.send(user);
});

handler.put(async (req:NextApiRequest, res:NextApiResponse) => {
  await db.connect();
  const user = await User.findById(req.query.id);
  if (user) {
    user.name = req.body.name;
    user.isAdmin = Boolean(req.body.isAdmin);
    await user.save();
    await db.disconnect();
    res.send({ message: 'User Updated Successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'User Not Found' });
  }
});

handler.delete(async (req:NextApiRequest, res:NextApiResponse) => {
  await db.connect();
  const user = await User.findById(req.query.id);
  if (user) {
    await user.remove();
    await db.disconnect();
    res.send({ message: 'User Deleted' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'User Not Found' });
  }
});

export default handler;
