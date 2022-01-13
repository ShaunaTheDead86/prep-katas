const squareCode = function(message) {
  message = message.split(" ").join("");
  let messageColumns = Math.ceil(Math.sqrt(message.length));
  let messageRows = Math.ceil(message.length / messageColumns);
  let newMessage = [];
  let lastIteration = 0;
  let result = [];

  for (let i = messageColumns; i <= message.length; i += messageColumns) {
    newMessage.push(message.slice(lastIteration,i) + " ");

    if (i + messageColumns >= message.length) {
      newMessage.push(message.slice(i,message.length));
    }

    lastIteration = i;
  }

  for (let x = 0; x < messageColumns; x++) {
    for (let y = 0; y < messageRows; y++) {
      if (newMessage[y][x] !== undefined) {
        if (result[x] === undefined) {
          result[x] = newMessage[y][x];
        } else {
          result[x] += newMessage[y][x];
        }
      }
    }
  }

  result = result.join(" ");
  return result;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));