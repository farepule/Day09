// Only change code below this line
function switchCaseSequential(num) {
  var answare;

  switch (num) {
    case 1: 
    case 2:
    case 3:
      answare = "Low";
        break;
    case 4: 
    case 5:
    case 6:
     answare = "Mid";
        break;
    case 7: 
    case 8:
    case 9:
        answare = "High";
          break;
  }
  return answare;
}
console.log(switchCaseSequential(1));
console.log(switchCaseSequential(2));
console.log(switchCaseSequential(3));
console.log(switchCaseSequential(4));
console.log(switchCaseSequential(5));
console.log(switchCaseSequential(6));
console.log(switchCaseSequential(7));
console.log(switchCaseSequential(8));
console.log(switchCaseSequential(9));
//Only change code above this line
module.exports = switchCaseSequential;
