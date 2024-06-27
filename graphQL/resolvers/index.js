const {
  getWordById,
  getWords,
  addWord,
  updateWord,
  deleteWord
} = require('./word.resolvers');

const {
  getUserById,
  getUsers,
  addUser,
  updateUser,
  deleteUser
} = require('./user.resolvers');

const resolvers = {
  Query: {
    // Users
    // user: getUserById,
    // users: getUsers,
    // Words
    word: getWordById,
    words: getWords,
  },
  Mutation: {
    // Users
    // addUser,
    // updateUser,
    // deleteUser,
    // Words
    addWord,
    updateWord,
    deleteWord
  }
};

module.exports = resolvers;
