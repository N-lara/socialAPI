const { User, Application } = require('../models');

module.exports = {
  //TODO 
  async getThoughts(req, res){
    try{
        res.json('getThoughts');
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //TODO 
  async getSingleThought(req, res){
    try{
        res.json('getSingleThought');
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //TODO 
  async createThought(req, res){
    try{
        res.json('createThought');
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //TODO 
  async updateThought(req, res){
    try{
        res.json('updateThought');
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //TODO 
  async deleteThought(req, res){
    try{
        res.json('deleteThought');
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //TODO async 
  createReaction(req, res){
    try{
        res.json('createReaction');
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