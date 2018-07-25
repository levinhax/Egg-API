'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    userName: {
      type: String,
      unique: true,
      required: true,
    },
    userPass: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    telphone: {
      type: String,
    },
    avatar: {
      type: String,
    },
    age: {
      type: Number,
    },
    sex: {
      type: String,
    },
    city: {
      type: String,
    },
    userRole: {
      type: Number,
      default: 1,
    },
    userCreate: {
      type: Date,
      default: Date.now,
    },
    lastLoginTime: {
      type: Date,
    },
    lastLoginPlace: {
      type: String,
    },
  });

  return mongoose.model('User', UserSchema);
};
