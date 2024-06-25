/**
 * This is the routing file for user-related API endpoints in a Node.js application.
 * It defines the routes for CRUD operations on user entities and links them to the appropriate service methods.
 */
const UserService = require('../services/user.service');
const express = require('express');
const router = express.Router();
const userService = new UserService();

/**
 * Route to get a list of users.
 * Supports query, pagination, and limit parameters.
 */
router.get('/',
  async (req, res, next) => {
    try {
      const a = null;
      a[0][3] = 1;
      const { query, page, limit } = req.query;
      const result = await userService.getAll(query, page, limit);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

/**
* Route to get a specific user by ID.
*/
router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      console.log('id', id);
      const user = await userService.getById(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Route to add a new user.
 */
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

/**
 * Route to update a user by ID.
 */
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
  }
);

/**
* Route to delete a user by ID.
*/
router.delete('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await userService.update(id);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
