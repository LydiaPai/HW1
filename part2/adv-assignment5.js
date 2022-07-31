function practice_5(students, student_objects) {
  students.forEach((ele) => (ele.object = []));

  for (let i = 0; i < students.length; i++) {
    //跑三次
    for (let j = 0; j < student_objects.length; j++) {
      //跑五次
      if (student_objects[j].student_id === students[i].student_id) {
        //students_objects的students_id 與 students的students_id 比對
        students[i].object.push(student_objects[j].object);
      }
    }
  }
  return students;
}

const students = [
  { student_id: 1, name: "Arthur" },
  { student_id: 2, name: "Peter" },
  { student_id: 3, name: "Molly" },
];

const student_objects = [
  { student_id: 1, object: "pen" },
  { student_id: 2, object: "pen" },
  { student_id: 3, object: "book" },
  { student_id: 1, object: "book" },
  { student_id: 3, object: "phone" },
];
console.log(practice_5(students, student_objects));
