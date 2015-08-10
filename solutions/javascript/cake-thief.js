var cakeTuples = [[7, 160], [2, 15], [3, 90]];
var capacity = 20;

var maxDuffelBagValue = function(cakeTuples, weightCapacity) {
  var maxValuesAtCapacities = [];

  for (var i = 0; i <= weightCapacity; i++) {
    maxValuesAtCapacities.push(0);
  }


  for (var j = 0; j < maxValuesAtCapacities.length; j++) {
    var currentCapacity = j;
    var currentMaxValue = 0;
    // console.log(currentCapacity)

    cakeTuples.forEach(function(cakeTuple) {
      var cakeWeight = cakeTuple[0];
      var cakeValue = cakeTuple[1];

      if (cakeWeight <= currentCapacity) {
        var maxValueUsingCake = cakeValue + maxValuesAtCapacities[currentCapacity - cakeWeight];
        currentMaxValue = Math.max(maxValueUsingCake, currentMaxValue);
      }
    });

    maxValuesAtCapacities[currentCapacity] = currentMaxValue
  }

  // console.log(maxValuesAtCapacities)

  return maxValuesAtCapacities[weightCapacity];

}

console.log(maxDuffelBagValue(cakeTuples, 20));