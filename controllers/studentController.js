const Student = require('../models/Student');
const Mentor = require('../models/Mentor');

exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.assignOrChangeMentor = async (req, res) => {
  try {
    const { studentId } = req.params;
    const { mentorId } = req.body;

    const student = await Student.findByIdAndUpdate(studentId, { mentor: mentorId }, { new: true });
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPreviousMentor = async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findById(studentId).populate('mentor');
    res.status(200).json(student.mentor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
