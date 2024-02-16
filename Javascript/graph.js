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


// NOTE: Unlike tree, traversing a graph using any approach (DFS or BFS) doesnt garantee if all the nodes will be traversed (for directed graphs especially). Deciding the starting node to traverse also changes the order of transversal and the nodes traversed.


// Graph Depth First Traversal Iterative
// Just like DFS tree, we use Stack.

function DFS_graph_iterative(graph,source_node){
    var stack = [ source_node ]
    var dfs_elements = []
    while(stack.length>0){
        var current_node = stack.pop()
        dfs_elements.push(current_node)
        var neighbours = graph[current_node]
        for(var i of neighbours){
            stack.push(i)
        }
    }
    return dfs_elements
}

// console.log(DFS_graph_iterative(graph1, 'a'))



// Graph Depth First Traversal Recursive
// NOTE: Unlike other recursive code where there is always a base condition, for this code there is no explicit base considtion but there is an implicit condition that is when nodes with no adjacent neighbours [] is encountered then no further calls for that nodes are made. Which avoids going into an infinite loop and terminating the infinite loop by using a base condition.

function DFS_graph_recursive(adjacency_list, source_node){
    console.log(source_node)
    for(let i of adjacency_list[source_node]){
        DFS_graph_recursive(adjacency_list, i)
    }
}

// DFS_graph_recursive(graph1, 'a')



// Graph Breath First Traversal Iterative

function BFS_graph_iterative(graph,source_node){
    var queue = [ source_node ]
    var bfs_elements = []
    while(queue.length>0){
        var current_node = queue.shift()
        bfs_elements.push(current_node)
        for(i of graph[current_node]){
            queue.push(i)
        }
    }
    return bfs_elements
}

// console.log(BFS_graph_iterative(graph1, 'a'))


// NOTE: We dont impliment BFS for graph using recursion because recursion uses stack under the hood.

