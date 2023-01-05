module.exports = {
  async up(db, client) {
    return db.collection('users').insertOne({
      username: 'desafiosharenergy',
      password: 'sh@r3n3rgy',
    });  
  },

  async down(db, client) {
    return db.collection('users').deleteOne({
      username: 'desafiosharenergy',
    });  
  }
};
