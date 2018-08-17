/*
TREES

Abstract data type

General Tree:
A tree has a root node.
The root node has 0 or more children.
Each child node has 0 or more children.
(each node in the tree can be seen as a subtree)

Constraints:
A child has only one parent and the root node has no parent.
Note: A tree is a special type of graph. A tree is a graph without cycles.

*** Operations:

tree.addChild(value)
=> child node (new tree)
add child to tree/subtree and return child node (which should be a tree instance)

tree.contains(value)
=> true/false
Return true if value is in tree, false if not

tree.traverseDepthFirst(callback)
=> undefined
Invoke the callback for every node in a depth-first order

tree.traverseBreadthFirst(callback)
=> undefined
Invoke the callback for every node in a breadth-first order

*** Additional Exercises:
Given treeA and treeB, check if treeB is a subtree of treeA (meaning that there exists a node n in treeA such that the subtree of n is identical to treeB).

Given a dictionary, create a prefix tree (commonly known as a trie)
https://en.wikipedia.org/wiki/Trie

*/

function Tree (value, parent) {
  this.value = value;
  this.parent = parent;
  this.children = [];
}

Tree.prototype.addChild = function(value) {
  let newTree = new Tree(value, this);
  this.children.push(newTree);
  return newTree;
};

Tree.prototype.contains = function(value) {
  let found = false;
  this.traverseDepthFirst((nodeValue) => {
    console.log(`nodeValue:${nodeValue}`);
    if (nodeValue === value) {
      found = true;
      return false; // @ToDo: Fix so that it won't continue
    } else {
      return true;
    }
  });
  return found;
};

Tree.prototype.print = function (traverseFn) {
  traverseFn(console.log);
}

Tree.prototype.traverseDepthFirst = function(fn) {
  let cont = fn(this.value);
  console.log(`cont:${cont}`);
  if (cont) { // @ToDo: Fix so that it won't continue
    for (let i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i]) {
        this.children[i].traverseDepthFirst(fn)
      }
    }
  };
};

Tree.prototype.traverseBreadthFirst = function(fn) {

  function height (tree) {
    if (tree.children.length === 0) {
      // console.log(`height:${tree.value}=1`);
      return 1;
    } else {
      let hmax = 0;
      tree.children.forEach(child => {
        hc = height(child);
        if (hc > hmax) {
          hmax = hc;
        }
      });
      // console.log(`height:${tree.value}=${hmax + 1}`);
      return hmax + 1;
    }
  }

  function traverseLevel (tree, level) {
    if (level >= 1 && level <= treeHeight) {
      if (level === 1) {
        // console.log(`${level}:${tree.value} *`);
        fn(tree.value);
      } else {
        // console.log(`${level}:${tree.value} >`);
        tree.children.forEach(child => {
          // console.log(`${level-1}:${child.value} .`);
          traverseLevel(child, level-1);
        });
      }
    }
  }

  let treeHeight = height(this);

  for (let level = 1; level <= treeHeight; level++) {
    traverseLevel(this,level);
  }
};

// http://www.cse.unsw.edu.au/~billw/Justsearch1.gif

let a = new Tree('A');

let b = a.addChild('B');
let c = a.addChild('C');

let d = b.addChild('D');
let e = b.addChild('E');

let f = c.addChild('F');
let g = c.addChild('G');

let h = d.addChild('H');

let i = e.addChild('I');
let j = e.addChild('J');

let k = f.addChild('K');

// let l = k.addChild('L');

// let m = l.addChild('M');

// console.log('Breath First:')
// a.print(a.traverseBreadthFirst.bind(a));

// console.log('Depth First:')
// a.print(a.traverseDepthFirst.bind(a));

console.log(a.contains('J'));
