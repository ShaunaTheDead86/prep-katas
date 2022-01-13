const priority = ["camel", "pascal", "snake", "kebab", "title", "vowel", "consonant", "upper", "lower"];

const makeCase = function (input, caseType) {
  let vowelRegex = /[aeiou]/g;        // regex to find all vowels
  let consonantRegex = /[^aeiou]/g;   // regex to find all non-vowels

  for (const order of priority) {     // iterate through priorities in order
    if (caseType.includes(order)) {   // if the caseType array contains the current priority value
      switch (order) {                // then enter a switch
        case "camel":                 // split input, set first char to upper case except [0] of input array, splice in the remainder of the string, rejoin array into string
          input = input.split(" ");
          for (let i = 1; i < input.length; i++) {
            input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1);
          }
          input = input.join("");
          break;
        case "pascal":                // split input, set first char to upper case, splice in the remainder of the string, rejoin array into string
          input = input.split(" ");
          for (let i = 0; i < input.length; i++) {
            input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1);
          }
          input = input.join("");
          break;
        case "snake":                 // split input and rejoin with "_"
          input = input.split(" ");
          input = input.join("_");
          break;
        case "kebab":                 // split input and rejoin with "-"
          input = input.split(" ");
          input = input.join("-");
          break;
        case "title":                 // split input, set first char to upper case, slice remainder of string, rejoin input
          input = input.split(" ");
          for (let i = 0; i < input.length; i++) {
            input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1);
          }
          input = input.join(" ");
          break;
        case "vowel":                 // replace all vowels with a function that returns the matched character but upper case
          input = input.replace(vowelRegex, function (x) { return x.toUpperCase() });
          break;
        case "consonant":             // replace all non-vowels with a function that return the matched character but upper case (will only work on letters)
          input = input.replace(consonantRegex, function (x) { return x.toUpperCase() });
          break;
        case "upper":                 // sets input to upper case
          input = input.toUpperCase();
          break;
        case "lower":                 // sets input to lower case
          input = input.toLowerCase();
          break;
      }
    }
  }

  return input;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));