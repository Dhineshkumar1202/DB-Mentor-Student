   POST `/mentor` - Create a new mentor
   POST `/student` - Create a new student
   POST `/mentor/:mentorId/assign-students` - Assign students to a mentor
   PUT `/student/:studentId/assign-mentor` - Assign or change a mentor for a student
   GET `/mentor/:mentorId/students` - Get all students for a specific mentor
   GET `/student/:studentId/mentor` - Get the previously assigned mentor for a student