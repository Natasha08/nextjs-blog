const getUser = (res, id) => {
  // get user from db
  return {name: 'Natasha O'};
};

const createUser = (params) => {
  // create user in db
  return {name: 'New User'};
};

export default function handler(req, res) {
  const { query, method } = req;

  switch (method) {
    case 'GET':
      const user = getUser(query.id);
      res.status(200).json(user);
      break;
    case 'POST':
      const newUser = createUser();
      res.status(200).json(newUser);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
