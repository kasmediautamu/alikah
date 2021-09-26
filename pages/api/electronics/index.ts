import { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../lib/mongodb'
import  Electronics from '../../../models/Electronics'

export default async function handler(req:NextApiRequest,res:NextApiResponse) {
  const { method } = req

  await db.dbConnect()

  switch (method) {
    case 'GET':
      try {
        const electronicsAds = await Electronics.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: electronicsAds })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const electronicsAd = await Electronics.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: electronicsAd })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
