import { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../lib/mongodb'
import  Dating from '../../../models/Dating'

export default async function handler(req:NextApiRequest,res:NextApiResponse) {
  const { method } = req

  await db.dbConnect()

  switch (method) {
    case 'GET':
      try {
        const datingAds = await Dating.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: datingAds })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
    //   await db.dbConnect()
    //   const newDating = new Dating ({
    //   title:req.body.title,
    //   userId:req.body.userId,
    //   subcategory:req.body.subcategory,
    //   description:req.body.description,
    //   imageURL:req.body.imageURL,
    //   country:req.body.country,
    //   price:req.body.price,
    //   subscriptionType:req.body.subscriptionType,
    //   isPaid:req.body.isPaid,
    //   subscriptionPrice:req.body.subscriptionPrice,
    //   isPublished:req.body.isPublished,
    //   address:req.body.address
    //   })

    //  const datingAd = await newDating.save();
    //  res.send(datingAd)
      try {
        console.log(req.body)
        const datingAd = await Dating.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: datingAd })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
