const { Thought, User, Application } = require('../models');

module.exports = {
  // get all thoughts 
  async getThoughts(req, res){
    try{
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // get single thought 
  async getSingleThought(req, res){
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v');

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create new thought 
  async createThought(req, res){
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        {username: req.body.username},
        { $addToSet: { thoughts: thought._id } },
        { runValidators: true, new: true }        
        )
      res.status(200).json(`${thought}--------------------------------${user}`);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // update existing thought 
  async updateThought(req, res){
    try{
      const thought = await Thought.findOneAndUpdate(
        {_id: req.params.thoughtId}, 
        { $set: req.body }, 
        { runValidators: true, new: true }
      );
      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }
      res.json(thought);
  } catch (err){
      res.status(500).json(err)
  }
  },
  // delete a thought 
  async deleteThought(req, res){
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      const user = await User.findOneAndUpdate(
        { username: thought.username },
        { $pull: { thoughts: req.params.thoughtId } },
        { runValidators: true, new: true }
      );

      res.status(200).json(`${thought}---------------------------${user}`);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //TODO 
  async createReaction(req, res){
    try{
      const thought = await Thought.findOneAndUpdate(
        {_id: req.params.thoughtId}, 
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //TODO async 
  deleteReaction(req, res){
    try{
        res.json('deleteReaction');
    } catch (err) {
      res.status(500).json(err);
    }
  }
}