const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// /api/users
router.route('/').get(getThoughts).post(createThought);

// /api/users/:Id
router.route('/:toughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

router.route('/:toughtId/reactions').post(createReaction).delete(deleteReaction)

module.exports = router;
