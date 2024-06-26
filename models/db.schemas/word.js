const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordSchema = new Schema(
  {
    text_es: String,
    text_en: String,
    createAt: {
      type: Date,
      default: Date.now,
    }
  },
  {
    virtuals: true,
    versionKey: false,
    id: true,
    toJSON: {
      transform: (document, returnedDocument) => {
        returnedDocument.id = returnedDocument._id;
        delete returnedDocument._id;
        delete returnedDocument.__v;
      },
    },
  }
);

module.exports =
  mongoose.models.Word || mongoose.model('Word', WordSchema, 'words');
