var isAnagram = function(stringOne, stringTwo) {
  var stringOneArr = stringOne.split('');
  var stringTwoArr = stringTwo.split('');

  stringOneArr.sort();
  stringTwoArr.sort();

  for (var i = 0; i < stringOneArr.length; i++) {
    if (stringOneArr[i] !== stringTwoArr[i]) return false;
  }

  return true;
}

console.log(isAnagram('abcd', 'dbca')) // --> true
console.log(isAnagram('abcd', 'aabb')) // --> false
