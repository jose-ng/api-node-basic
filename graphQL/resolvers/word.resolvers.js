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
  return wordService.update(id, dto.data);
}

function deleteWord(_, { id }) {
  return wordService.add(id);
}

module.exports = {
  getWordById,
  getWords,
  addWord,
  updateWord,
  deleteWord
};
