import { NextApiRequest , NextApiResponse } from "next";
import { MongoClient } from "mongodb";
// /api/new-meetup
// POST /api/new-meetup

const handler = async (req : NextApiRequest, res : NextApiResponse) => {
  if (req.method === 'POST') {
    const data = JSON.parse(req.body);
    // const { title, image, address, description } = data;
    // 클라이언트 사이드에 노출 되지 않기 때문에 안전하다.
    const key = "mongodb+srv://jeongin:diGEJDpalNDqwMpA@cluster0.urv4exi.mongodb.net/meetups?retryWrites=true&w=majority";

    const client = await MongoClient.connect(key)
    const db = client.db();

    // table
    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({message: 'Meetup inserted!'});
  }
}

export default handler;