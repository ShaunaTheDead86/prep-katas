const urlDecode = function(text) {
  let result = {};

  text = text.split("&");                     // split text into an array by "&"
  for (let i = 0; i < text.length; i++) {     // iterate through the items split by "&"
    text[i] = text[i].split("=");             // split each part of the array by "="
  }

  for (const item of text) {                  // iterate through the array of text
    if (item[1].includes("%20")) {            // check if the second item in the array contains a %20
      item[1] = item[1].replace(/%20/g," ");  // replace the "%20" with an empty space " " using regex
    }

    result[item[0]] = item[1];                // after the replacements, set result[firstItem] equal to secondItem
  }

  return result;                              // return the result object to the urlDecode call
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);