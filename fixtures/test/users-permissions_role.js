const ObjectId = require('mongodb').ObjectID;

module.exports = [
  {
    _id: ObjectId('5f74c5dccfbfc113b9c6b306'),
    name: 'Authenticated',
    description: 'Default role given to authenticated user.',
    type: 'authenticated',
  },
  {
    _id: ObjectId('5f74c5dccfbfc113b9c6b307'),
    name: 'Public',
    description: 'Default role given to unauthenticated user.',
    type: 'public',
  }
];