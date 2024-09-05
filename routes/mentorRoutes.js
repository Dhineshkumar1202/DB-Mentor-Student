const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorController');

router.post('/', mentorController.createMentor);
router.post('/:mentorId/assign-students', mentorController.assignStudents);
router.get('/:mentorId/students', mentorController.getStudentsForMentor);

module.exports = router;
