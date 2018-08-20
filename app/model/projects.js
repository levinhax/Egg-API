'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ObjectId = Schema.Types.ObjectId;
  // 项目
  const projectSchema = new Schema({
    projectName: {
      type: String,
      required: true,
    },
    projectDesc: {
      type: String,
      required: true,
    },
    projectContent: {
      type: String,
    },
    projectCreater: {
      type: ObjectId,
      ref: 'User',
      required: true,
    },
    projectParticipant: [
      {
        user: {
          type: ObjectId,
          ref: 'User',
        },
      },
    ],
    projectTag: {
      type: Array,
      required: true,
    },
    projectDate: {
      type: Date,
      default: Date.now,
    },
    projectLink: {
      type: String,
      required: true,
    },
    projectImg: {
      type: Array,
      requried: true,
    },
    projectState: {
      type: Boolean,
      default: false,
    },
    projectLike: {
      type: Number,
      default: 0,
    },
  });

  return mongoose.model('Projects', projectSchema);
};
