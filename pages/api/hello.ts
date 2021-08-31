import { NextApiRequest, NextApiResponse } from "next";
/**
 * using _req because not being used within the function, this way typescript wont complain
 */

export default (_req:NextApiRequest,res:NextApiResponse):void => {
  res.status(200).json({name:'John Doe'})
}
