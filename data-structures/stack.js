/*

STACK

Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.


*** Operations:

myStack.push(value)
=> count of stack
add value to collection

myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection

myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection

myStack.count()
=> number of elements in stack


*** Additional Exercises:

Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?



 */

function Stack(capacity) {
  this.capacity = capacity;
  this.count = 0;
  this.stack = {};
  this._min = null;
}

Stack.prototype.push = function (value) {
  if (this.capacity === this.count) {
    console.log(`Unable to push ${JSON.stringify(value)}, max capacity ${this.capacity} reached`);
    return this.count;
  }
  this.stack[this.count++] = value;
  if (this._min === null || value < this._min) {
    this._min = value;
  }
  console.log(`pushed ${JSON.stringify(value)} => ${JSON.stringify(this.stack)}`);
  return this.count;
};
// Time complexity:

Stack.prototype.pop = function () {
  if (this.count === 0) {
    return undefined;
  }
  const value = this.stack[--this.count];
  delete this.stack[this.count];
  console.log(`popped ${JSON.stringify(value)} => ${JSON.stringify(this.stack)}`);
  if (value === this._min) {
    this._min = null;
    for (let i = 0; i < this.count; i++) {
      if (this._min === null || this.stack[i] < this._min) {
        this._min = this.stack[i];
      }
    }
  }
  return value;
};
// Time complexity:

Stack.prototype.peek = function () {
  if (this.count === 0) {
    return undefined;
  }
  return this.stack[this.count];
};
// Time complexity:

Stack.prototype.count = function () {
  return this.count;
};
// Time complexity:

Stack.prototype.min = function () {
  console.log(`min = ${JSON.stringify(this._min)}`);
  return this._min;
};

Stack.prototype.contains = function (value) {
  for (let i = 0; i < this.count; i++) {
    if (this.stack[i] === value) {
      return true;
    }
  }
  return false;
}

Stack.prototype.until = function (value) {
  for (let i = this.count-1; i >= 0; i--) {
    if (this.stack[i] === value) {
      return this.count - i;
    }
  }
  return 0;
}


const myStack = new Stack(4);

myStack.push('lola');
myStack.push('falana');

myStack.min();

myStack.push('memo');
myStack.push('_tivas');

myStack.push('pepe');

myStack.min();

myStack.pop();
myStack.min();


/*
*** Exercises:

1. Implement a stack with a min method which returns the minimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.

2. Sort a stack so that its elements are in ascending order.

3. Given a string, determine if the parenthesis in the string are balanced.
Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
Ex: balancedParens( 'Math._min(5,(6-3))(' ) => false

4. Towers of Hanoi - https://en.wikipedia.org/wiki/Tower_of_Hanoi
You are given three towers (stacks) and N disks, each of different size. You can move the disks according to three constraints:
   1. only one disk can be moved at a time
   2. when moving a disk, you can only use pop (remove the top element) and push (add to the top of a stack)
   3. no disk can be placed on top of a disk that is smaller than it
The disks begin on tower#1. Write a function that will move the disks from tower#1 to tower#3 in such a way that none of the constraints are violated.
 */
