const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');
const date = require('date-and-time');


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: [true, 'body required'],
      min: 1,
      max: 280
    },
    createdAt: { 
      type: Date,
      default: new Date(),
      get: dateFormat
      //TODO not sure if getter is correct to format ON QUEARY
    },
    username: {
        type: String,
        required: [true, 'user required'],
    },
    //TODO check this
    reactions: [Reaction]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `fullName` that gets and sets the user's full name
thoughtSchema.get(function dateFormat(){return date.format(this.now, 'ddd, MMM DD YYYY, hh:mm:ss A'); })


// Initialize our User model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
