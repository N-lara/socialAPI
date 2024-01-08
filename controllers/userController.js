const { User, Application } = require('../models');

module.exports = {


  //TODO CHECK Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },


  // TODO CHECK Get a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },


  // TODO CHECK create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // TODO CHECK update existing user
  async updateUser(req,res) {
    try{
//////////////////////////////////////////////////////////////////////////////
        const user = await User.findOneAndUpdate////////////check this for sure
    } catch (err){
        res.status(500).json(err)
    }
  },

  // TODO CHECK Delete a user and associated apps
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      await Application.deleteMany({ _id: { $in: user.applications } });
      res.json({ message: 'User and associated apps deleted!' })
    } catch (err) {
      res.status(500).json(err);
    }
  },
//TODO add friend
  async addFriend(req, res){
    try{
        res.json('addFriend');
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //TODO deleteFriend
  async deleteFriend(req, res){
    try{
        res.json('deleteFriend');
    } catch (err) {
      res.status(500).json(err);
    }
  }
};