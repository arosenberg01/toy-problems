var uniqueChars = function(str) {
  var existsBools = [];
  
  for (var i = 0; i < 256; i++) {
    existsBools.push(false);
  }

  for (var i = 0; i < str.length; i++) {
    var boolIndex = str.charCodeAt(i);
    if (existsBools[boolIndex]) {
      return false;
    } else {
      existsBools[boolIndex] = true
    }
  }

  return true;
};

console.log(uniqueChars('abcde')) // --> true
console.log(uniqueChars('abbc')) // --> false

