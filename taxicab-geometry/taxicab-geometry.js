const adjustHeading = function (dir,head) {
  if (dir === "right") {
    if (head[0] === 1) {
      return [0,-1];
    } 
    
    if (head[0] === -1) {
      return [0,1];
    } 
    
    if (head[1] === 1) {
      return [1,0];
    }

    if (head[1] === -1) {
      return [-1,0];
    }
  }

  if (dir === "left") {
    if (head[0] === 1) {
      return [0,1];
    } 
    
    if (head[0] === -1) {
      return [0,-1];
    } 
    
    if (head[1] === 1) {
      return [-1,0];
    }

    if (head[1] === -1) {
      return [1,0];
    }
  }
};

const blocksAway = function (directions) {
  let tracker = [0,0];
  let heading = [0,1];
  
  for (const e of directions) {
    if (typeof e === "number") {
      for (let i = 0; i < e; i++) {
        tracker[0] += heading[0];
        tracker[1] += heading[1];
      }
    } else {
      heading = adjustHeading(e,heading);
    }
  }

  let result = {};

  if (tracker[0] > 0) {
    result.east = tracker[0];
  } 

  if (tracker[0] < 0) {
    result.west = Math.abs(tracker[0]);
  }

  if (tracker[0] === 0) {
    result.east = tracker[0];
  }
  
  if (tracker[1] > 0) {
    result.north = tracker[1];
  } 

  if (tracker[1] < 0) {
    result.south = Math.abs(tracker[1]);
  }

  if (tracker[1] === 0) {
    result.north = tracker[1];
  }

  return result;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));