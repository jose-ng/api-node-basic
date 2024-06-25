/**
 * This is the routing file for word-related API endpoints in a Node.js application.
 * It defines the routes for CRUD operations on word entities and links them to the appropriate service methods.
 */
const WordService = require('../services/word.service');
const express = require('express');
const router = express.Router();
const wordService = new WordService();

/**
 * Route to get a list of words.
 * Supports query, pagination, and limit parameters.
 */
router.get('/',
  async (req, res, next) => {
    try {
      const { query, page, limit } = req.query;
      const result = await wordService.getAll(query, page, limit);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

/**
* Route to get a specific word by ID.
*/
router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      console.log('id', id);
      const word = await wordService.getById(id);
      res.json(word);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Route to add a new word.
 */
router.post(
  '/',
  async (req, res, next) => {
    try {
      const body = req.body;
      const newWord = await wordService.add(body);
      res.status(201).json(newWord);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Route to update a word by ID.
 */
router.patch('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const { body: data } = req;
      const response = await wordService.update(id, data);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
);

/**
* Route to delete a word by ID.
*/
router.delete('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await wordService.update(id);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
