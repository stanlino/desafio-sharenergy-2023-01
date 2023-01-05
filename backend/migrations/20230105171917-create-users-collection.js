module.exports = {
  async up(db, client) {
    return db.createCollection('users');
  },

  async down(db, client) {
    return db.dropCollection('users');
  }
};
