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
      min: 1,
      max: 280
    },
    createdAt: { 
      type: Date,
      default: new Date()
      //TODO getter to format ON QUEARY
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

reactionSchema.get(function(){return date.format(now, 'ddd, MMM DD YYYY, hh:mm:ss A'); })
// // Initialize our  model///? do i do this
// const Reaction = model('reaction', reactionSchema);

module.exports = reactionSchema;
