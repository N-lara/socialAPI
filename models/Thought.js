const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

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
      //TODO getter to format ON QUEARY
      default:Date.now//check this
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
thoughtSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our User model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
