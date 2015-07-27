/*

Write a function, deleteNode, that deletes a given node from the middle
(not the head or the tail) of a linked list, in constant time.

 */

var Node = function(value){
 var node = {};

 node.value = value;
 node.next = null;

 return node;
};


var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    var newTail = Node(value);

    if (!list.head) {
      list.head = newTail;
    }

    if (list.tail) {
      list.tail.next = newTail;
    }

    list.tail = newTail;
  };

  list.removeHead = function(){

    if (list.head === null){
      return null;
    }

    var currentHead = list.head;
    list.head = list.head.next;

    return currentHead.value;
  };

  list.contains = function(target){

    var node = list.head;

    while (node) {
      if (node.value === target) {
        return true;
      }

      node = node.next;
    }

    return false;
  };

  list.deleteNode = function(nodeToBeDeleted) {

    var tempNode = nodeToBeDeleted.next;
    nodeToBeDeleted.value = tempNode.value;
    nodeToBeDeleted.next = tempNode.next
    delete tempNode;

  };

  return list;
};






