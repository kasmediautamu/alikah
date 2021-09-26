import { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../lib/mongodb'
import  LocalManufucturer from '../../../models/LocalManufucturer'

export default async function handler(req:NextApiRequest,res:NextApiResponse) {
  const { method } = req

  await db.dbConnect()

  switch (method) {
    case 'GET':
      try {
        const localManufucturerAds = await LocalManufucturer.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: localManufucturerAds })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const localManufucturerAd = await LocalManufucturer.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: localManufucturerAd })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
