use("quiz");
db.quiz.drop();
db.quiz.insertOne({
  _id: 84148949,
  name: "Camel Doll",
  contactInfo: {
    address: "4497 Harbort Parkway, Melbourne Airport",
    phone: "6135233156",
    email: "Camel.Doll@student.monash.edu",
  },
  enrolmentInfo: [
    { unitcode: "FIT9132", year: "2021", semester: 2, mark: 70, grade: "D" },
    { unitcode: "FIT9136", year: "2021", semester: 2, mark: 59, grade: "P" },
  ],
});
db.quiz.countDocuments();
