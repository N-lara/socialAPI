const { ObjectId } = require('bson');
const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId:{
        type: ObjectId,
        default: new ObjectId/////TODO fact check this
    },
    reactionText: {
      type: String,
      required: [true, 'body required'],
      min: 1,
      max: 280
    },
    createdAt: { 
      type: Date,
      //TODO default timestamp, + getter to format ON QUEARY
    },
    username: {
        type: String,
        required: [true, 'user required'],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Initialize our User model
const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
