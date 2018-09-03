/*
GRAPHS

Abstract data type

Basic Graph:
Stores nodes (represented by any primitive value) and the neighbors for each node. This implementation represents a graph as an adjacency list (https://en.wikipedia.org/wiki/Adjacency_list).

Here's an example:
1---2---3
 \ /
  4
graph = {
  1: [2, 4],
  2: [1, 3, 4],
  3: [2],
  4: [1, 2]
}

Constraints:
This graph implementation is undirected and can have unconnected nodes. The nodes are represented by unique primitive values.

*** Operations:
graph.addNode(value) // value must be a primitive
=> undefined
Add node to graph

graph.removeNode(value)
=> undefined
Remove node from graph

graph.contains(value)
=> true/false
Returns true if value is found in graph, false otherwise

graph.addEdge(value1, value2)
=> undefined
Create connection between two nodes if they're both present in the graph

graph.removeEdge(value1, value2)
=> undefined
Remove connection between two nodes

graph.hasEdge(value1, value2)
=> true/false
Returns true if edge exists, false otherwise

graph.forEach(callback)
=> undefined
Traverse the graph and invoke the passed callback once for each node. The callback function receives the following for each node: node value, node Neighbors, all nodes.

Implement traversal methods for depth-first and breadth-first traversal. The methods take a starting node and a callback that gets invoked for each node. The callback should receive two arguments: the node value and the distance (number of edges that separate the node from the starting node). See example usage below.

graph.traverseDepthFirst(value1, callback)
=> undefined
Starting at the node with the value passed in, traverse the graph and invoke the callback for each node in a depth-first fashion.

graph.traverseBreadthFirst(value, callback)
=> undefined
Starting at the node with the value passed in, traverse the graph and invoke the callback for each node in a breadth-first fashion.

Example Usage:
1---2---3---5
 \ /
  4
{
  '1': [ 2, 4 ],
  '2': [ 1, 3, 4 ],
  '3': [ 2, 5 ],
  '4': [ 1, 2 ],
  '5': [ 3 ]
}

var traverseDF = [];
graph.traverseDepthFirst(1, function(val, distance) { traverseDF.push([val, distance]) });
traverseDF should be [ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 5, 3 ], [ 4, 2 ] ]

var traverseBF = [];
graph.traverseBreadthFirst(1, function(val, distance) { traverseBF.push([val, distance]) });
traverseBF should be [ [ 1, 0 ], [ 2, 1 ], [ 4, 1 ], [ 3, 2 ], [ 5, 3 ] ]


*** Additional Exercises:

Given a directed graph and two nodes in the graph, write a function that indicates whether there is a route between the two nodes. Bonus: rather than returning a boolean, have your function return the shortest distance between the two nodes (the number of edges that separate them).

*/


function Graph () {
  this._nodes = {};
}

Graph.prototype.addNode = function(value) {
  if (value !== undefined && this._nodes[value] === undefined) {
    this._nodes[value] = [];
  }
};
// Time complexity: O(1)

Graph.prototype.removeNode = function(value) {
  delete this._nodes[value];
};
// Time complexity: O(1)

Graph.prototype.contains = function(value) {
  return (this._nodes[value]) ? true : false;
};
// Time complexity: O(1)

Graph.prototype.addEdge = function(value1, value2) {
  let node1 = this._nodes[value1];
  let node2 = this._nodes[value2];
  if (node1 && node2) {
    node1.push(value2);
    // node2.push(value1);
  }
};
// Time complexity: O(1)

Graph.prototype.removeEdge = function(value1, value2) {
  let node1 = this._nodes[value1];
  let node2 = this._nodes[value2];
  if (node1 && node2) {
    let idx1 = node1.findIndex(n => n === value2);
    let idx2 = node2.findIndex(n => n === value1);
    if (idx1 >=0) {
      node1.splice(idx1,1);
    }
    if (idx2 >= 0) {
      node2.splice(idx2,1);
    }
  }
};
// Time complexity: O(N)

Graph.prototype.hasEdge = function(value1, value2) {
  let node1 = this._nodes[value1];
  let node2 = this._nodes[value2];
  if (node1 && node2) {
    let idx1 = node1.findIndex(n => n === value2);
    let idx2 = node2.findIndex(n => n === value1);
    if (idx1 && idx2) {
      return true;
    }
  }
  return false;
};
// Time complexity: O(N)

Graph.prototype.forEach = function(fn) {
  for (let val in this._nodes) {
    fn(val,this._nodes[val], this._nodes);
  }
};
// Time complexity: O(N)

Graph.prototype.traverseDepthFirst = function(value, fn, visited = {}, distance = 0) {
  if (!this._nodes[value]) return;
  fn(value, distance);
  visited[value] = true;
  this._nodes[value].forEach((neighbor) => {
    if (!visited[neighbor]) {
      this.traverseDepthFirst(neighbor,fn,visited,distance+1);
    }
  });
};
// Time complexity: O(N)

Graph.prototype.traverseBreadthFirst = function(value, fn) {
  if (!this._nodes[value]) return;
  let queue = [value];
  let visited = {};
  while (queue.length) {
    let node = queue.shift();
    if (visited[node] === undefined) {
      fn(node);
      visited[node] = true;
      let neighbors = this._nodes[node].filter(val => visited[val] !== true);
      queue = queue.concat(neighbors);
    }
  }
};
// Time complexity:

Graph.prototype.print = function () {
  console.log(JSON.stringify(g._nodes,null,2));
}


let g = new Graph();
g.addNode(1);
g.addNode(2);
g.addEdge(1,2);
g.addNode(3);
g.addEdge(1,3);
g.addNode(4);
g.addEdge(2,4);
g.addEdge(3,4);
g.addNode(5);
g.addEdge(4,5);
g.addNode(6);
g.addEdge(5,6);
g.print();

df = [];
g.traverseDepthFirst(1,(val,dis) => {df.push(val)});
console.log(df);

bf = [];
g.traverseBreadthFirst(1,(val) => {bf.push(val)});
console.log(bf);
