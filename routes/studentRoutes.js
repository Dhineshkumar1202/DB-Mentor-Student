const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/', studentController.createStudent);
router.put('/:studentId/assign-mentor', studentController.assignOrChangeMentor);
router.get('/:studentId/mentor', studentController.getPreviousMentor);

module.exports = router;
