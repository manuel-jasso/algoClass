/*

LINKED LIST

Comprised of nodes that represent a sequence.
Each node is composed of data and a reference/link to the next node.


*** Operations:

** Part 1

myList.forEach(callbackFn)
invoke callback function with the value of each node

myList.print()
=> string with all values in list (ex: '0, 1, 2, 3')

myList.insertAfter(refNode, value)
=> new node
insert new node associated with value passed in after refNode

myList.removeAfter(refNode)
=> removed node
remove node after the refNode

myList.insertHead(value)
=> new head
insert new head node at the beginning of the list with the value passed in

myList.removeHead()
=> removed head node
remove the head node of the linked list

myList.findNode(value)
=> first node that has a value matching what was passed in


* Optimization:
Say we have a linked list that has 100 items and we want to add an item to the very end. How would you do that with your current implementation? How can you modify the data structure to add an item to the end in constant time?

myList.appendToTail(value)
=> new tail node
add a new tail node at the end of the list with the associated value passed in

myList.removeTail()
=> removed tail node
remove the tail node from the list


** Part 2

Now let's think about creating insertBefore and removeBefore methods for the nodes in our list. Can you think of an efficient way to do so?

Think about time complexity. What would it be for your current implementation of a linked list?

How can we modify our data structures (Node and Linked List classes) so that we can make these O(1) operations?

Once you've come up with a plan, implement the following methods.

myList.insertBefore(refNode, value)
=> new node inserted
insert new node with associated value before refNode

myList.removeBefore(refNode)
=> removed node
remove node before the refNode passed in


*** Additional Exercises:

Implement a circularly linked list:
https://en.wikipedia.org/wiki/Linked_list#Circularly_linked_list

Reimplement stack and queue data structures using linked lists.


 */


// PART 1

function Node(value) {
  this.next = null;
  this.value = value;
}

function LinkedList(headValue) {
  if (headValue === undefined) console.log('Must provide value for first node');
  this.head = new Node(headValue);
  console.log(`LinkedList: ${this.print()}`);
  this.print
}

LinkedList.prototype.forEach = function(callback) {
  let node = this.head;
  while (node) {
    callback(node);
    node = node.next;
  }
};
// Time complexity:

LinkedList.prototype.print = function(sep) {
  let str = '';
  sep = sep || ',';
  this.forEach(node => str = (str ? str + sep : str) + node.value);
  return '[' + str + ']';
};
// Time complexity:

LinkedList.prototype.insertAfter = function(node, value) {
  let newNode = new Node(value);
  newNode.next = node.next;
  node.next = newNode;
  console.log(`insertAfter: ${this.print()}`);
  return newNode;
};
// Time complexity:

LinkedList.prototype.removeAfter = function(node) {
  let removedNode = node.next;
  if (!removedNode) {
    console.log(`Nothing to removeAfter: ${this.print()}`);
    return null; // there is nothing after
  }
  node.next = removedNode.next;
  removedNode.next = null;
  console.log(`removeAfter: ${this.print()}`);
  return removedNode;
};
// Time complexity:

LinkedList.prototype.insertHead = function(value) {
  let newNode = new Node(value);
  newNode.next = this.head;
  this.head = newNode;
  console.log(`insertHead: ${this.print()}`);
  return newNode;
};
// Time complexity:

LinkedList.prototype.removeHead = function() {
  let removedNode = this.head;
  this.head = removedNode.next;
  console.log(`removeHead: ${this.print()}`);
  return removedNode;
}

LinkedList.prototype.findNode = function(value) {
  let node = this.head;
  while (node) {
    if (node.value === value) {
      console.log(`findNode: ${node.value}`);
      return node;
    }
    node = node.next;
  }
  console.log(`Didn't findNode: ${value}`);
  return null;
};
// Time complexity:

LinkedList.prototype.appendToTail = function(value) {
  let newNode = new Node(value);
  let node = this.head;
  while (node.next) {
    node = node.next;
  }
  node.next = newNode;
  console.log(`appendToTail: ${this.print()}`);
  return newNode;
};
// Time complexity:


// PART 2:

LinkedList.prototype.insertBefore = function(node, value) {
  if (node === this.head) {
    return this.insertHead(value)
  }
  let prevNode = this.head;
  while (prevNode) {
    if (prevNode.next === node) {
      let newNode = new Node(value);
      prevNode.next = newNode;
      newNode.next = node;
      console.log(`insertBefore: ${this.print()}`);
      return newNode;
    }
    prevNode = prevNode.next;
  }
  return null;
};
// Time complexity:

LinkedList.prototype.removeBefore = function(node) {
  if (node === this.head) {
    console.log(`Nothing to removeBefore: ${this.print()}`);
    return null; // there is nothing before
  }
  if (node === this.head.next) {
    return this.removeHead()
  }
  let prevNode = this.head;
  while (prevNode && prevNode.next) {
    if (prevNode.next.next === node) {
      let removedNode = prevNode.next;
      removedNode.next = null;
      prevNode.next = node;
      console.log(`removeBefore: ${this.print()}`);
      return removedNode;
    }
    prevNode = prevNode.next;
  }
  console.log(`Nothing to removeBefore: ${this.print()}`);
  return null;
};
// Time complexity:

let ll = new LinkedList(1)
let n = ll.appendToTail(2);
let r = ll.removeAfter(n);
n = ll.insertAfter(n,3);
r = ll.removeBefore(n);
n = ll.removeBefore(n);
n = ll.removeBefore(n);

n = ll.insertHead(1);
n = ll.insertAfter(n,2);
n = ll.insertBefore(n,'c');
n = ll.insertBefore(n,'b');
n = ll.findNode(1);
n = ll.insertBefore(n,'a');
r = ll.removeAfter(n);

/*
*** Exercises:

1. Implement a stack using a linked list.

2. Implement a queue using a linked list.

3. Write a method that remove duplicates from an unsorted linked list. What is the time complexity? Re-implement the method without using any additional storage structure (constant space complexity). What is the time complexity?

4. Reverse a linked list. Do not use any additional storage structures.

5. Find the kth to last element of a singly linked list.

6. Detect if a linked list has a loop.

7. Check if a linked list is a palindrome.

8. Given two linked lists that represent numbers, return a linked list that represents the sum of those numbers:
  4 2 5        (4 -> 2 -> 5)
+ 7 3 1        (7 -> 3 -> 1)
--------
1 1 5 6   (1 -> 1 -> 5 -> 6)

 */
