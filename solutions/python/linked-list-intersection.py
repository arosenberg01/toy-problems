# Given two singly linked lists, determine if the two lists intersect. If they do,
# return the intersecting node.
# linked_list = Linked_List()
# linked_list.add_to_tail('a')
# linked_list.add_to_tail('b')
# linked_list.add_to_tail('c')

import math

class Node(object):

    def __init__(self, value):
        self.value = value
        self.next = None

    def get_value(self):
        return self.value

    def get_next(self):
        return self.next

    def set_value(self, new_value):
        self.value = new_value

    def set_next(self, new_next):
        self.next = new_next

    def reveal(self):
        print('Value: %s' % self.value)
        print('Next: %s' % self.next)


class Linked_List(object):

    def __init__(self):
        self.head = None
        self.tail = None

    def add_to_head(self, node):
        node.set_next(self.head)
        self.head = node

        if self.tail == None:
            self.tail = node

    def add_to_tail(self, node):
        if self.head == None:
            self.add_to_head(node)
        else:
            self.tail.set_next(node)
            self.tail = node

    def size(self):
        current_node = self.head
        count = 0
        while current_node != None:
            count += 1
            current_node = current_node.get_next()

        return count

    def print_out(self):
        current_node = self.head
        while current_node != None:
            print(current_node.get_value())
            current_node = current_node.get_next()

nodeA = Node('a')
nodeB = Node('b')
nodeC = Node('c')
nodeX = Node('x')
nodeY = Node('y')
nodeFoo = Node('foo')
nodeBar = Node('bar')


linked_list1 = Linked_List()
linked_list1.add_to_tail(nodeA)
linked_list1.add_to_tail(nodeB)
linked_list1.add_to_tail(nodeC)
linked_list1.add_to_tail(nodeFoo)
linked_list1.add_to_tail(nodeBar)
linked_list1.print_out()

print('\n')

linked_list2 = Linked_List()
linked_list2.add_to_tail(nodeX)
linked_list2.add_to_tail(nodeY)
linked_list2.add_to_tail(nodeFoo)
linked_list2.add_to_tail(nodeBar)
linked_list2.print_out()

def find_intersection(list1, list2):
    if list1.size() > list2.size():
        longer_list = list1
        shorter_list = list2
    else:
        longer_list = list2
        shorter_list = list1

    size_diff = math.fabs(list2.size() - list1.size())

    while size_diff > 0:
        current_nodeA = longer_list.head.get_next()
        size_diff -= 1

    current_nodeB = shorter_list.head

    while current_nodeA != None and current_nodeB != None:
        if current_nodeA == current_nodeB:
            return current_nodeA.get_value()
        else:
            current_nodeA = current_nodeA.get_next()
            current_nodeB = current_nodeB.get_next()

    return None

print('\n')
print('Intersecting Node: %s' % find_intersection(linked_list1, linked_list2))





