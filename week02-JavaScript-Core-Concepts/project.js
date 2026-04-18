// ==============================
// Student Manager App
// Week 2 JavaScript Project
// Concepts Used:
// Arrays, Objects, map, filter,
// find, Set, Destructuring,
// Class, Callback, JSON, Async
// ==============================

// Array to store students
let studentList = [];

// Class
class Student {
  constructor(id, name, age, marks, skills) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.marks = marks;
    this.skills = skills;
  }

  getStatus() {
    return this.marks >= 40 ? "Pass" : "Fail";
  }
}

// Callback function
function showMessage(text, callback) {
  const message = document.getElementById("message");
  message.innerText = text;
  callback();
}

// Clear input fields
function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("marks").value = "";
  document.getElementById("skills").value = "";
}

// Add student
function addStudent() {
  const name = document.getElementById("name").value.trim();
  const age = Number(document.getElementById("age").value);
  const marks = Number(document.getElementById("marks").value);
  const skillsInput = document.getElementById("skills").value.trim();

  if (!name || !age || marks === "" || !skillsInput) {
    document.getElementById("message").innerText = "Please fill all fields correctly.";
    return;
  }

  // Set to remove duplicate skills
  const skills = [...new Set(skillsInput.split(",").map(skill => skill.trim()).filter(skill => skill !== ""))];

  const newStudent = new Student(
    studentList.length + 1,
    name,
    age,
    marks,
    skills
  );

  studentList.push(newStudent);

  showMessage("Student added successfully.", function () {
    clearInputs();
    displayStudents(studentList);
  });
}

// Display students
function displayStudents(students) {
  const container = document.getElementById("studentContainer");
  container.innerHTML = "";

  if (students.length === 0) {
    container.innerHTML = "<p>No students found.</p>";
    return;
  }

  students.forEach(student => {
    // Destructuring
    const { id, name, age, marks, skills } = student;

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${name}</h3>
      <p><strong>ID:</strong> ${id}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Marks:</strong> ${marks}</p>
      <p><strong>Skills:</strong> ${skills.join(", ")}</p>
      <p class="status ${student.getStatus() === "Pass" ? "pass" : "fail"}">
        <strong>Status:</strong> ${student.getStatus()}
      </p>
    `;

    container.appendChild(card);
  });
}

// Filter passed students
function showPassedStudents() {
  const passed = studentList.filter(student => student.marks >= 40);
  displayStudents(passed);
  document.getElementById("message").innerText = "Showing passed students.";
}

// Find topper
function showTopper() {
  if (studentList.length === 0) {
    document.getElementById("message").innerText = "No students available.";
    return;
  }

  let maxMarks = Math.max(...studentList.map(student => student.marks));
  let topper = studentList.find(student => student.marks === maxMarks);

  displayStudents([topper]);
  document.getElementById("message").innerText = `Topper is ${topper.name}.`;
}

// Search student by name
function searchStudent() {
  const searchValue = document.getElementById("searchName").value.trim().toLowerCase();

  if (!searchValue) {
    document.getElementById("message").innerText = "Please enter a name to search.";
    return;
  }

  const foundStudents = studentList.filter(student =>
    student.name.toLowerCase().includes(searchValue)
  );

  displayStudents(foundStudents);
  document.getElementById("message").innerText = "Search completed.";
}

// Export JSON
function exportJSON() {
  const jsonData = JSON.stringify(studentList, null, 2);
  document.getElementById("jsonOutput").innerText = jsonData;
  document.getElementById("message").innerText = "Student data converted to JSON.";
}

// Async simulation
function loadSampleData() {
  setTimeout(() => {
    studentList = [
      new Student(1, "Rahul", 20, 85, ["JavaScript", "HTML"]),
      new Student(2, "Priya", 21, 32, ["CSS", "Python"]),
      new Student(3, "Aman", 22, 67, ["Java", "SQL"])
    ];

    displayStudents(studentList);
    document.getElementById("message").innerText = "Sample student data loaded asynchronously.";
  }, 1000);
}

// Load sample data on page load
loadSampleData();