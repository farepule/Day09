// Only change code below this line
function logicOrder(num) {
  if (num <= 50){
      return "Les then 50";
  } else if (num <= 100){
      return "Les then 100";
  } else{
      return "Greater then or equal to 100";
  }
}
console.log(logicOrder(28));
console.log(logicOrder(60));
console.log(logicOrder(110));
 //Only change code above this line
module.exports = logicOrder;
