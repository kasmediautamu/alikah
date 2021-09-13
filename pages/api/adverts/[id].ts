import db from '../../../lib/mongodb'
import Advert from '../../../models/Advert'
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
 const {
   query: { id },
   method,
 } = req
 await db.dbConnect()
 switch (method) {
  case 'GET' /* Get a model by its ID */:
    try {
      const advert = await Advert.findById(id)
      if (!advert) {
        return res.status(400).json({ success: false })
      }
      res.status(200).json({ success: true, data: advert })
    } catch (error) {
      res.status(400).json({ success: false })
    }
    break

  case 'PUT' /* Edit a model by its ID */:
    await db.dbConnect()
    try {
      const advert = await Advert.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      })
      if (!advert) {
        return res.status(400).json({ success: false })
      }
      res.status(200).json({ success: true, data: advert })
    } catch (error) {
      res.status(400).json({ success: false })
    }
    break

  case 'DELETE' /* Delete a model by its ID */:
    try {
      const deletedAdvert = await Advert.deleteOne({ _id: id })
      if (!deletedAdvert) {
        return res.status(400).json({ success: false })
      }
      res.status(200).json({ success: true, data: {} })
    } catch (error) {
      res.status(400).json({ success: false })
    }
    break

  default:
    res.status(400).json({ success: false })
    break
}
}


