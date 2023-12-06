// Constants
export const cpp = "Cpp Subjects";
export const java = "Java Subjects";
export const react = "React Subjects";

// Teacher object
export const cTeacher = {
  experienceTeachingC: 10,
};

// Functions
const getRequirements = (subject) => {
  if (subject === cpp) {
    return "C++ requirements";
  } else if (subject === java) {
    return "Java requirements";
  } else if (subject === react) {
    return "React requirements";
  } else {
    return "Unknown subject";
  }
};

const getAvailableTeacher = (subject, teacher) => {
  if (subject === cpp || subject === java || subject === react) {
    return `Available teacher for ${subject}: ${teacher}`;
  } else {
    return "Unknown subject";
  }
};

// Usage
console.log("C++");
console.log(getRequirements(cpp));
console.log(getAvailableTeacher(cpp, cTeacher));

console.log("Java");
console.log(getRequirements(java));
console.log(getAvailableTeacher(java, cTeacher));

console.log("React");
console.log(getRequirements(react));
console.log(getAvailableTeacher(react, cTeacher));
