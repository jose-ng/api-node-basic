class UserService {
  constructor() { }

  async getAll(query, page = 0, limit = 10) {
    try {
      const words = [
        { id: "1", text_en: 'John', text_es: 'Doe' },
        { id: "2", text_en: 'Ana', text_es: 'Lin' },
      ];
      return words;
    } catch (err) {
      throw new Error(err);
    }
  }

  async getById(id) {
    try {
      const users = [
        { id: "1", text_en: 'John', text_es: 'Doe' },
        { id: "2", text_en: 'Ana', text_es: 'Lin' },
      ];
      const user = users.find(i => i.id === id);
      return user;
    } catch (err) {
      throw new Error(err);
    }
  }

  async add(body) {
    try {
      const user = { text_en: 'John', text_es: 'Doe' };
      return user;
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(id, data) {
    try {
      return id;
    } catch (err) {
      throw new Error(err);
    }
  }

  async delete(id) {
    try {
      return id;
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = UserService;
