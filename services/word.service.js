class WordService {
  constructor() { }

  async getAll(query, skip = 0, limit = 10) {
    try {
      const words = [
        { id: "1", text_en: 'Red', text_es: 'Rojo' },
        { id: "2", text_en: 'Green', text_es: 'Verde' },
      ];
      return words;
    } catch (err) {
      throw new Error(err);
    }
  }

  async getById(id) {
    try {
      const words = [
        { id: "1", text_en: 'Red', text_es: 'Rojo' },
        { id: "2", text_en: 'Green', text_es: 'Verde' },
      ];
      const word = words.find(i => i.id === id);
      return word;
    } catch (err) {
      throw new Error(err);
    }
  }

  async add(body) {
    try {
      const word = { text_es: "Rojo", text_en: "Red" };
      return word;
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

module.exports = WordService;
