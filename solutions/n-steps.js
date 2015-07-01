var countPaths = function(steps) {
  var paths = 0;

  var countSteps = function(stepsRemaining) {
    if (!stepsRemaining) {
      paths++;
    } else if (stepsRemaining < 0) {
      return;
    } else {
      countSteps(stepsRemaining - 1);
      countSteps(stepsRemaining - 2);
      countSteps(stepsRemaining - 3);
    }
  }

  countSteps(steps);

  return paths;
};
