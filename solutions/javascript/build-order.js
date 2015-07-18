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


