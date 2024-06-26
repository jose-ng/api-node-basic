const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    firstName: String,
    fSurName: String,
    mSurName: String,
    bio: String,
    photoUrl: String,
    createAt: {
      type: Date,
      default: Date.now,
    },
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
  mongoose.models.User || mongoose.model('User', UserSchema, 'users');
