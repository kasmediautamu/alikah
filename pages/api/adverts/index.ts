import db from '../../../lib/mongodb'
import  Advert from '../../../models/Advert'

export default async function handler(req, res) {
  const { method } = req

  await db.dbConnect()

  switch (method) {
    case 'GET':
      try {
        const adverts = await Advert.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: adverts })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const advert = await Advert.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: advert })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
