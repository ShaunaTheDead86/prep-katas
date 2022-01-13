const talkingCalendar = function(date) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const ordinals = ["st", "nd", "rd", "th"];
  let results = date.split("/");
  results = [results[1], results[2], results[0]]; // re-arrange results to fit format of Month/Day/Year
  
  for (let i = 0; i < results.length; i++) {
    switch (i) {
      case 0:
        results[i] = months[results[i] - 1];
        break;
      case 1:
        if (results[i] === "01") {
          results[i] += ordinals[0] + ",";
        } else if ( results[i] === "02") {
          results[i] += ordinals[1] + ",";
        } else if (results[i] === "03") {
          results[i] += ordinals[2] + ",";
        } else {
          results[i] += ordinals[3] + ",";
        }

        results[i] = results[i].replace(/0/g,"");
        break;
    }
  }

  return results.join(" ");
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));