import nc from 'next-connect'
import bcrypt from 'bcryptjs'
import User from '../../../models/User'
import db from '../../../lib/mongodb'
import { isAuth,signToken } from '../../../utils/auth'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = nc()
handler.use(isAuth)

handler.put(async(req:NextApiRequest,res:NextApiResponse)=>{
  await db.dbConnect()
  const user = await User.findById(req.body.id)
    if(user.password){
      user.password = req.body.password ? bcrypt.hashSync(req.body.password)
      : user.password;
    }
    await user.save()
    await db.disconnect()

    const token = signToken(user)
    res.send({
      token,
      id:user.id,
      name:user.name,
      email: user.email,
      isAdmin: user.isAdmin
    })
})

export default handler
