const WordService = require('../../services/word.service');
const wordService = new WordService();

function getWords(_, { query, page, limit }) {
  return wordService.getAll(query, page, limit);
}

function getWordById(_, { id }) {
  return wordService.getById(id);
}

function addWord(_, { dto }) {
  return wordService.add(dto);
}

function updateWord(_, { id, dto }) {
  console.log(id, dto);
  return wordService.update(id, dto);
}

function deleteWord(_, { id }) {
  return wordService.delete(id);
}

module.exports = {
  getWordById,
  getWords,
  addWord,
  updateWord,
  deleteWord
};
