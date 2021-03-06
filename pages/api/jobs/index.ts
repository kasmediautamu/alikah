import { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../lib/mongodb'
import  Job from '../../../models/Job'

export default async function handler(req:NextApiRequest,res:NextApiResponse) {
  const { method } = req

  await db.dbConnect()

  switch (method) {
    case 'GET':
      try {
        const jobAds = await Job.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: jobAds })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const jobAd = await Job.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: jobAd })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
