/**
 * This is the service file for word-related operations in a Node.js application.
 * It defines the business logic for CRUD operations on word entities.
 */

const Word = require("../models/db.schemas/word");

class WordService {
  constructor() { }

  /**
   * Retrieves a list of words.
   * @param {string} query - The search query to filter words.
   * @param {number} [page=0] - The page number for pagination.
   * @param {number} [limit=10] - The maximum number of words per page.
   * @returns {Array} - A list of words.
   */
  async getAll(query, page = 0, limit = 10) {
    try {
      let q = {};
      if (query)
        q = {
          $or: [
            { text_en: { $regex: query, $options: "i" } },
            { text_es: { $regex: query, $options: "i" } },
          ],
        };
      const words = await Word.find(q)
        .skip(page * limit)
        .limit(limit)
        .sort({ rating: "desc" })
        .exec();

      const totalWords = await Word.countDocuments(q).exec();
      return { words, totalWords };
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * Retrieves a word by its ID.
   * @param {string} id - The ID of the word to retrieve.
   * @returns {Object} - The word with the specified ID.
   */
  async getById(id) {
    try {
      const word = await Word.findById(id).exec();
      return word;
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * Adds a new word.
   * @param {Object} body - The data of the new word to add.
   * @returns {Object} - The newly added word.
   */
  async add({ text_es, text_en }) {
    try {
      const word = await Word.create({
        text_es,
        text_en,
        createAt: new Date().toISOString()
      });
      return word;
    } catch (err) {
      if (err && err.code === 11000) throw new Error(err.message);
      throw new Error(err);
    }
  }

  /**
   * Updates an existing word by its ID.
   * @param {string} id - The ID of the word to update.
   * @param {Object} data - The new data to update the word with.
   * @returns {string} - The ID of the updated word.
   */
  async update(id, data) {
    try {
      console.log('id', id, 'data', data
      );
      const updated = await Word.findOneAndUpdate(
        { _id: id },
        { ...data },
        { new: true }
      ).exec();

      return updated;
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * Deletes a word by its ID.
   * @param {string} id - The ID of the word to delete.
   * @returns {string} - The ID of the deleted word.
   */
  async delete(id) {
    try {
      await Word.findOneAndDelete({
        _id: id
      }).exec();
      return true;
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = WordService;
