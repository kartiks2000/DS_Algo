// Graph is represented using Adjacency list (hashmap in C++/Java, a dictionary in python, object in javascript)
// Consists of key value pairs, key being the nodes and value being the adjacent neighbours of that node where it can do (incase of directed graph).
// To nodes A and B might be connected together such as they have a directed edge from node A to node B in this case A will have a neighbour B in the adjacency list (as we can go from A to B), but B will not have A as the neighbour (as there is no directed edge from B to A).

// Sample graph adjacency list

// a
// / \
// v   v
// b   c
// |   |
// v   v
// d   e
// |
// v
// f


const graph1 = {
    "a": ['b', 'c'],
    "b": ['d'],
    "c": ['e'],
    "d": ['f'],
    "e": [],
    "f": []
}

