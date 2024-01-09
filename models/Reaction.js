const { ObjectId } = require('bson');
const { Schema, model } = require('mongoose');
const date = require('date-and-time');

const reactionSchema = new Schema(
  {
    reactionId:{
        type: ObjectId,
        default: new ObjectId
    },
    reactionText: {
      type: String,
      required: [true, 'body required'],
      minLength: 1,
      maxLength: 280
    },
    createdAt: { 
      type: Date,
      default: new Date(),
      get: function dateFormat(){return date.format(this.createdAt, 'ddd, MMM DD YYYY, hh:mm:ss A'); }
    },
    username: {
        type: String,
        required: [true, 'user required'],
    },
  },
  {
    id: false
  }
);

module.exports = reactionSchema;
