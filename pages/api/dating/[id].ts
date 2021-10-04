import nc from 'next-connect';
import Dating from '../../../models/Dating';
import db from '../../../lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next'

const handler = nc();

handler.get(async (req:NextApiRequest,res:NextApiResponse) => {
  await db.dbconnect();
  const dating = await Dating.findById(req.query.id);
  await db.disconnect();
  res.send(dating);
});

export default handler;
