const express = require('express');
const router = express.Router();
const controller = require('../controllers/programmingLanguages')

/* GET programming languages. */
router.get('/',  controller.getMultiple);
router.get('/:id',  controller.getSingle);
router.post('/', controller.create);
router.put('/:id',controller.update);
router.delete('/:id', controller.remove);
module.exports = router;