/**
 * This is the service file for user-related operations in a Node.js application.
 * It defines the business logic for CRUD operations on user entities.
 */
const User = require("../models/db.schemas/user");

class UserService {
  constructor() { }

  /**
   * Retrieves a list of users.
   * @param {string} query - The search query to filter users.
   * @param {number} [page=0] - The page number for pagination.
   * @param {number} [limit=10] - The maximum number of users per page.
   * @returns {Array} - A list of users.
   */
  async getAll(query, page = 0, limit = 10) {
    console.log("🚀 ~ UserService ~ getAll ~ query:", query)
    try {
      let q = {};
      if (query)
        q = {
          $or: [
            { firstName: { $regex: query, $options: "i" } },
            { fSurName: { $regex: query, $options: "i" } },
            { mSurName: { $regex: query, $options: "i" } }
          ],
        };
      const users = await User.find(q)
        .skip(page * limit)
        .limit(limit)
        .sort({ rating: "desc" })
        .exec();

      const total = await User.countDocuments(q).exec();
      return { list: users, total };
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * Retrieves a user by its ID.
   * @param {string} id - The ID of the user to retrieve.
   * @returns {Object} - The user with the specified ID.
   */
  async getById(id) {
    try {
      const user = await User.findById(id).exec();
      return user;
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
  * Adds a new user.
  * @param {Object} body - The data of the new user to add.
  * @returns {Object} - The newly added user.
  */
  async add({ email, firstName }) {
    try {
      const user = await User.create({
        email,
        firstName,
        createAt: new Date().toISOString()
      });
      return user;
    } catch (err) {
      if (err && err.code === 11000) throw new Error(err.message);
      throw new Error(err);
    }
  }

  /**
   * Updates an existing user by its ID.
   * @param {string} id - The ID of the user to update.
   * @param {Object} data - The new data to update the user with.
   * @returns {string} - The ID of the updated user.
   */
  async update(id, data) {
    try {
      const updated = await User.findOneAndUpdate(
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
   * Deletes a user by its ID.
   * @param {string} id - The ID of the user to delete.
   * @returns {string} - The ID of the deleted user.
   */
  async delete(id) {
    try {
      await User.findOneAndDelete({
        _id: id
      }).exec();
      return true;
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = UserService;
