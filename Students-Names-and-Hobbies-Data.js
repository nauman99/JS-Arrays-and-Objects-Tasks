// Students' Names and Hobbies Data
let students = [
  {
    name: "Amna",
    hobbies: ["eating", "cooking"],
  },
  {
    name: "Daniyal",
    hobbies: ["arts", "shopping"],
  },
  {
    name: "Fahad",
    hobbies: ["coding", "cooking"],
  },
  {
    name: "Hajra",
    hobbies: ["sleep", "reading"],
  },
];

students.forEach((student) => {
  console.log(`Hobbies of ${student.name}`);

  for (const [index, value] of student.hobbies.entries()) {
    console.log("%d. %s", index + 1, value);
  }
});

console.log("---------------");
