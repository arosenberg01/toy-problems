// A set of valid modules and dependencies
var validModules = ['a', 'b', 'c', 'd', 'e'];
var validDependencies = [['a', 'b'], ['a', 'd'], ['b', 'c'], ['b', 'e'], ['c', 'd'], ['c', 'e']];

// A set of modules with a circular dependecy, and therefore invalid
var impossibleModules = ['a', 'b', 'c', 'd', 'e'];
var impossibleDependencies = [['a', 'b'], ['a', 'd'], ['b', 'c'], ['e', 'b'], ['c', 'd'], ['c', 'e']];

// A basic graph node, with self-contained edges
var Node = function(name) {
  var obj = {};

  obj.name = name;
  obj.edges = [];

  obj.addEdge = function(node) {
    obj.edges.push(node);
  };

  return obj;
};

// A basic graph to represent the modules and dependencies
var Graph = function(modules, dependencies) {
  var nodes = {};

  // Create nodes from modules and put in hash
  modules.forEach(function(module) {
    var node = Node(module);
    nodes[node.name] = node;
  });

  // Add module dependecies to all nodes as edges
  dependencies.forEach(function(dependency) {
    var dependentNode = nodes[dependency[0]];
    var parentNode = nodes[dependency[1]]
    nodes[dependentNode.name].addEdge(parentNode);
  });

  return nodes;
};

// Takes in graph representing project and attempts to return valid build order
var buildProject = function(project) {
  var buildOrder = [];
  var resolved = {};
  var alreadySeen = {};

  var resolveDependencies = function(node, buildOrder, resolved, alreadySeen) {

    // If the same node is seen more than once in a dependency resolution attempt, and it hasn't been resolved already
    // a circular dependecy exists
    if (!resolved[node.name] && alreadySeen[node.name]) {
      throw new Error('Circular dependecy detected!');
    }

    // Recursively resolve dependencies of each module
    node.edges.forEach(function(edge) {
      alreadySeen[node.name] = true;
      resolveDependencies(edge, buildOrder, resolved, alreadySeen);
    });

    // If module hasn't already been built, add to build order and record it's existence
    if (!resolved[node.name]) {
      buildOrder.push(node.name);
      resolved[node.name] = true;
    }
  };

  // Attempt to resolve dependencies for each module
  for (var module in project) {
    resolveDependencies(project[module], buildOrder, resolved, alreadySeen);
  }

  return buildOrder;
};

 var validGraph = Graph(validModules, validDependencies);
 var validBuildOrder = buildProject(validGraph);
 console.log(validBuildOrder);

 // var impossibleGraph = Graph(impossibleModules, impossibleDependencies);
 // var impossibleBuildOrder = buildProject(impossibleGraph);
