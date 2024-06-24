const WordService = require('../services/word.service');
const express = require('express');

const router = express.Router();
const wordService = new WordService();

router.get('/',
  async (req, res, next) => {
    try {
      const { query, page, limit } = req.query;
      const result = await wordService.getAll(query, page, limit);
      res.json(result);
    } catch (error) {
      next(error);
    }
  });

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
  });

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await wordService.update(id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});


module.exports = router;
