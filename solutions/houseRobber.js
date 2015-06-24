/**
 * The key is that at every house, you need to keep track of the current maximum sum 
 * including the current house, the current maximum sum excluding the current house, 
 * and the greater of those two at the previous house.
 */

var houseRobber = function(houses) {
  
  // initialize inclusive max to the first item in the array
  var inclusiveMax = houses[0];

  // initialize exclusive max to zero
  var exclusiveMax = 0;

  // initialize previous maximum variable to keep track of previous max sum
  var previousMax;

  // iterate through array, starting at first element
  for (var i = 1; i < houses.length; i++) {

    // set previous max sum to greater of the two - inclusive and exclusive max sum
    if (inclusiveMax > exclusiveMax) {
      previousMax = inclusiveMax;
    } else {
      previousMax = exclusiveMax;
    }

    // update inclusive max sum to be old exclusive max plus current element in array
    inclusiveMax = exclusiveMax + houses[i];

    // update exclusive max sum to be previous max sum
    exclusiveMax = previousMax;
  }

  // after iterating, return greater of the two - inclusive and exclusive max sum
  return inclusiveMax > exclusiveMax ? inclusiveMax : exclusiveMax

};
