const Mentor = require('../models/Mentor');
const Student = require('../models/Student');

exports.createMentor = async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    await mentor.save();
    res.status(201).json(mentor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.assignStudents = async (req, res) => {
  try {
    const { mentorId } = req.params;
    const { studentIds } = req.body;

    
    const mentor = await Mentor.findByIdAndUpdate(mentorId, {
      $push: { students: { $each: studentIds } }
    }, { new: true });

    
    await Student.updateMany(
      { _id: { $in: studentIds } },
      { $set: { mentor: mentorId } }
    );

    res.status(200).json(mentor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStudentsForMentor = async (req, res) => {
  try {
    const { mentorId } = req.params;
    const students = await Student.find({ mentor: mentorId });
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
