// Extensive Student Data

let students = [
  {
    name: "Amna",
    gender: "f",
    dob: new Date("02-04-1990"),
    address: {
      ilaqa: "Gulistan-e-Johar",
      city: "Karachi",
      country: "Pakistan",
      postalCode: 47114,
    },
    phoneNo: "0331-2324243",
    admissionTestScore: 56,
    hasInternet: true,
    hasComputer: false,
    hasJob: true,
    hasSchoolBefore: false,
  },
  {
    name: "Hadia",
    gender: "f",
    dob: new Date("05-15-1984"),
    address: {
      ilaqa: "Lyari",
      city: "Karachi",
      country: "Pakistan",
      postalCode: 75660,
    },
    phoneNo: "0345-3452953",
    admissionTestScore: 48,
    hasInternet: false,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: true,
  },
  {
    name: "Ahmed",
    gender: "m",
    dob: new Date("06-27-2002"),
    address: {
      ilaqa: "University Road",
      city: "Quetta",
      country: "Pakistan",
      postalCode: 82215,
    },
    phoneNo: "0333-0124325",
    admissionTestScore: 33,
    hasInternet: true,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: false,
  },
  {
    name: "Fariha",
    gender: "f",
    dob: new Date("09-13-1998"),
    address: {
      ilaqa: "University Road",
      city: "Karachi",
      country: "Pakistan",
      postalCode: 82215,
    },
    phoneNo: "0331-9432532",
    admissionTestScore: 33,
    hasInternet: true,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: false,
  },
  {
    name: "Abdullah",
    gender: "m",
    dob: new Date("01-24-1972"),
    address: {
      ilaqa: "Bazar Colony",
      city: "Lahore",
      country: "Pakistan",
      postalCode: 32212,
    },
    phoneNo: "0345-9912121",
    admissionTestScore: 33,
    hasInternet: false,
    hasComputer: false,
    hasJob: true,
    hasSchoolBefore: true,
  },
];
// Task 1
students.forEach(function (student) {
  console.log("Name: " + student.name);
  console.log(student.gender == "f" ? "Gender: Female" : "Gender: Male");
  console.log("City: " + student.address.city);
  console.log("Score: " + student.admissionTestScore + " marks");
  console.log("-----------------");
});

// Task 2
console.log("Names of Female students");
students.forEach(function (student) {
  if (student.gender === "f") {
    console.log("Name: " + student.name);
  }
  console.log("-----------------");
});

// Task 3
console.log("Names of Male students");
students.forEach(function (student) {
  if (student.gender === "m") {
    console.log("Name: " + student.name);
  }
  console.log("-----------------");
});

// Task 4
console.log("Names of passed students");
students.forEach(function (student) {
  if (student.admissionTestScore >= 50) {
    console.log("Name: " + student.name);
  }
  console.log("-----------------");
});

// Task 5
console.log("Names of eligible students");
students.forEach(function (student) {
  if (student.address.city === "Karachi" && student.hasInternet) {
    console.log("Name: " + student.name);
  }
  console.log("-----------------");
});

// Task 6
console.log("Names of students in specified format");
students.forEach(function (student) {
  console.log(student.name + "'s address");
  console.log(
    student.address.ilaqa +
      " in " +
      student.address.city +
      ", " +
      student.address.country
  );
  console.log("-----------------");
});

// Task 7
console.log("names and phone number of students who have Ufone");
students.forEach(function (student) {
  if (student.phoneNo.substring(0, 3) === "033") {
    console.log("Name: " + student.name);
    console.log("Phone no: " + student.phoneNo);
  }
  console.log("-----------------");
});

// Task 8
let groupB = [],
  groupA = [];

console.log("Students who have a job or a class are placed in Group B");

students.forEach(function (student) {
  if (student.hasJob || student.hasSchoolBefore) {
    groupB.push(student.name);
  } else {
    groupA.push(student.name);
  }
});

console.log("Group A: ", groupA.join());
console.log("Group B: ", groupB.join());
console.log("-----------------");

// Task 9

console.log("Print age of each student");
students.forEach(function (student) {
  console.log(student.name + "'s age is " + (2020 - student.dob.getFullYear()));
  console.log("-----------------");
});

// Task 10

console.log("Print the name of the oldest student");
let ages = [];
students.forEach(function (student) {
  let age = 2020 - student.dob.getFullYear();
  ages.push(age);
});
let maxAge = Math.max(...ages);

students.forEach(function (student) {
  if (2020 - student.dob.getFullYear() == maxAge) console.log(student.name);
  console.log("-----------------");
});
