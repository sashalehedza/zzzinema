import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Sasha Lehedza',
    email: 'sashalehedza@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Test User',
    email: 'test@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
