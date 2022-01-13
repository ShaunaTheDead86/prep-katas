const organizeInstructors = function(instructors) {
  let results = {};                           // set results to an empty object

  for (const obj of instructors) {            // iterate through instructors
    if (results[obj.course] === undefined) {  // if the results object does not yet contain a property for the course
      results[obj.course] = obj.course;       // add the course property to the result object
      results[obj.course] = [obj.name];       // and set the value of the new property to an array containing the instructor's name
    } else {                                  // if results does already contain a property for the course
      results[obj.course].push(obj.name);     // then add the instructor name to the end of the existing array
    }
  }

  return results;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));