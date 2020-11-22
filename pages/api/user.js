export default function handler(req, res) {
  /* alternate ways to send user data
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({name: 'Natasha O'}))

    res.status(200).send({name: 'Natasha O'})
  */

  if (req.method === 'GET') {
    res.status(200).json({name: 'Natasha O'})
  }
}