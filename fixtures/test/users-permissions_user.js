const ObjectId = require('mongodb').ObjectID;

module.exports = [
  {
    _id: ObjectId('5f87559d5b5dc3c4b51b4eba'),
    name: 'Tester',
    role: ObjectId('5f74c5dccfbfc113b9c6b306'),
    email: 'marco@tinkin.one',
    identification: '0147258396',
    password: 'hello123',
    username: 'marco@tinkin.one',
    lastname: 'espinosa',
    phone: '09999999'
  },
  {
    _id: ObjectId('5f87559d5b5dc3c4b51b4ebc'),
    name: 'New Tester',
    role: ObjectId('5f74c5dccfbfc113b9c6b306'),
    email: 'newtester@tinkin.one',
    identification: '0147258393',
    password: 'hello123',
    username: 'newtester@tinkin.one'
  },
  {
    _id: ObjectId('5f87559d5b5dc3c4b51b4ebf'),
    name: 'User Test',
    role: ObjectId('5f74c5dccfbfc113b9c6b306'),
    email: 'usertest@tinkin.one',
    identification: '0147258320',
    password: '$2a$10$7dCyviCkuVlATK8JwCsOm.b/KLZiLMvodvg6Zp1IyZz4r9ctz0BGe', // hello123
    username: 'usertest@tinkin.one',
    lastname: 'espinosa',
    phone: '09999999'
  },
  {
    _id: ObjectId('5f87559d5b5dc3c4b51b4eb5'),
    name: 'Tinkin',
    role: ObjectId('5f74c5dccfbfc113b9c6b306'),
    email: 'tinkin_one@tinkin.one',
    identification: '0147258322',
    password: 'hello123',
    username: 'tinkin_one@tinkin.one',
    lastname: 'One',
    phone: '09999999'
  }
];