const UserService = require('../../services/user.service');
const userService = new UserService();

function getUsers(_, { query, page, limit }) {
  return userService.getUsers(query, page, limit);
}

function getUserById(_, { id }) {
  return userService.getById(id);
}

async function addUser(_, { dto }) {
  return userService.create(dto);
}

async function updateUser(_, { id, dto }) {
  return userService.update(id, dto);
}

async function deleteUser(_, { id }) {
  return wordService.deleteUser(id);
}

module.exports = {
  getUserById,
  getUsers,
  addUser,
  updateUser,
  deleteUser
};
