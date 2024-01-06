const { User, Application } = require('../models');

module.exports = {
  //TODO 
  async getThoughts(req, res){
    try{
        res.json('user');
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //TODO 
  async getSingleThought(req, res){
    try{
        res.json('user');
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //TODO 
  async createThought(req, res){
    try{
        res.json('user');
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //TODO 
  async updateThought(req, res){
    try{
        res.json('user');
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //TODO 
  async deleteThought(req, res){
    try{
        res.json('user');
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //TODO async 
  createReaction(req, res){
    try{
        res.json('user');
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //TODO async 
  deleteReaction(req, res){
    try{
        res.json('user');
    } catch (err) {
      res.status(500).json(err);
    }
  }
}