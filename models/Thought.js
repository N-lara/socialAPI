const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');
const date = require('date-and-time');


const thoughtSchema = new Schema(
  {
    thoughtText: {
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
    //TODO check this
    reactions: [Reaction]
  },
  {
    id: false,
  }
);


// Initialize our User model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
