const express = require('express');
const router = express.Router();
const controller = require('../controllers/teachers');
router.get('/', controller.getMultiple);
router.get('/:id', controller.getSingle);
router.post('/', controller.create);
router.patch('/:id', controller.update);
router.delete('/:id', controller.remove);
module.exports = router;
