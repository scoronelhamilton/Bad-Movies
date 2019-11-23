const router = require('express').Router();
const movieController = require('../controllers/movieController.js');

router.get('/search/:genre', movieController.getSearch)
router.get('/genres', movieController.getGenres)
router.post('/save', movieController.saveMovie)
router.delete('/delete/:id', movieController.deleteMovie)

module.exports = router;