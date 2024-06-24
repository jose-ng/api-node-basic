const UserService = require('../services/user.service');
const express = require('express');

const router = express.Router();
const userService = new UserService();

router.get('/',
  async (req, res, next) => {
    try {
      const { query, page, limit } = req.query;
      const result = await userService.getAll(query, page, limit);
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
      const word = await userService.getById(id);
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
      const newUser = await userService.add(body);
      res.status(201).json(newUser);
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
      const response = await userService.update(id, data);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await userService.update(id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});


module.exports = router;
