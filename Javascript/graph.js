// https://www.youtube.com/watch?v=tWVWeAqZ0WU&ab_channel=freeCodeCamp.org

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


// Path problem: We need to findout if path from Node A to Node B exists.
// Sollution: We can find it using any traversal algorith like BFS or DFS in which we start from the starting Node and traverse and see if the destination node is traversed during thye traversal.

function has_path(source, destination){
    // calling the traversal function and checking if traversal from the source node covers the destination node.
    // We can make it more efficient by custom writting the traversal code here and returning as soon as we get out destination during the transversal.
    var traversed_nodes = DFS_graph_iterative(graph1, source)
    console.log(traversed_nodes)
    if(traversed_nodes.includes(destination)){ return true }
    return false
}

// console.log(has_path('a', 'd'))


// Emplimenting a better version of has_path iterative
function has_path2_iterative(graph, source, destination){
    if(source == destination){ return true }
    var stack = [ source ]
    while(stack.length>0){
        var current_node = stack.pop()
        if(current_node==destination){return true}
        for(var i of graph[current_node]){
            stack.push(i)
        }
    }
    return false
}

// console.log(has_path2_iterative(graph1, 'b', 'd'))


// Emplimenting a better version of has_path recursive
function has_path2_recursive(graph, source, destination){
    if(source == destination){ return true }
    for(var i of graph[source]){
        return (has_path2_recursive(graph1, i, destination) == true) // returns as soon as the destination is found
    }
    return false
}

// console.log(has_path2_recursive(graph1, 'e', 'd'))



// Ways to calculate complexity of graphs.
// There are two ways:

// Way 1
// n = # of nodes
// e = # of edges
// So we can compute for the has_path as:
// Time: O(e), Space: O(n)


// Way 2
// n = # of nodes
// n^2 = # of edges
// So we can compute for the has_path as:
// Time: O(n^2), Space: O(n)



// NOTE: So far we have been assuming that the graphs are acyclic.

// NOTE: So far all the problems we discussed and did were on the assumption that there were only one way directed graph that is if Node A can go to Node B then Node B can not go to Node A. But now we will be looking into undirected graphs (means there is no direction hence any node can go in any direction (A node can go to any of its neighbour)). Every edge is bi-directional.

// Edge list of an undirected graph. Every pair in this list represents connection of the nodes.
// Example [i, j] -> means i can travel to j and j can travel to i.
var edge_list = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]

// We prefer converting an edge list into an adjacency list. (Traversal algorithms works best on adjacency list)
// Creating a graph (adjacency list) for the above edge list.

var graph2 = {
    'i': ['j', 'k'],
    'j': ['i'],
    'k': ['i', 'm', 'l'],
    'm': ['k'],
    'l': ['k'],
    'o': ['n'],
    'n': ['o']
}

// When considering cyclic graphs (which have atleas 1 cycle in it), traversing them can result in infite loop. To avoid this we have to keep record of the already visited nodes.
// A graph with only two nodes (for a undirected/bidirectional graph), it also behaves like a cyclic graph as going to A to B, then B to A and then again A to B and so on....


// Code to convert a edge list to a adjacency list
function node_list_to_adjacency_list(node_list){
    var adjacency_list = {}
    for(i of node_list){
        var [a, b] = i  // Destructuring as we know every element will have a pair of edges
        if(!(a in adjacency_list)){ adjacency_list[a] = [] }
        if(!(b in adjacency_list)){ adjacency_list[b] = [] }
        adjacency_list[a].push(b)
        adjacency_list[b].push(a)
    }
    return adjacency_list
}

// console.log(node_list_to_adjacency_list(edge_list))

// Output
// {
//     i: [ 'j', 'k' ],
//     j: [ 'i' ],
//     k: [ 'i', 'm', 'l' ],
//     m: [ 'k' ],
//     l: [ 'k' ],
//     o: [ 'n' ],
//     n: [ 'o' ]
// }

// Draw the above graph on a paper to visualize and to be able to test and understand the below code.



// Creating DFS traversal handing the cyclic graphb case using visited node startery.
function DFS_graph_iterative_cyclic(graph,source_node){
    var visited_nodes = new Set()
    var dfs_nodes = []
    var stack = [ source_node ]
    while(stack.length>0){
        var current_node = stack.pop()
        dfs_nodes.push(current_node)
        visited_nodes.add(current_node)
        for(i of graph[current_node]){
            if(!(visited_nodes.has(i))){ stack.push(i) }
        }
    }
    return dfs_nodes
}

// console.log(DFS_graph_iterative_cyclic(graph2, 'i'))


// NOTE: a single graph can have multiple sepearte and de-atached sub graphs (like you will see in the above sample when you draw it). These each sepearted graphs are called components of the graph.


// NOTE: We always handle the case of cyclic graph unless stated that its acyclic.
// We impliment the solution to avoid infinite loop in the cyclic graph using either a dictionary/object managing the nodes as keys and true as value if they are visited or byusing Set (effecient as it checks for an element and add an element in O(1))


// Implimenting has_path function (this time considering it might have a cycle and cause infinite loop (For undirected/bidirectional graph))
function has_path3_undirectional(adjacency_list, source_node, destination_node, visited_nodes = new Set()){
    if(source_node==destination_node){ return true }
    if(visited_nodes.has(source_node)){ return false } // Checking if node is already visited.
    visited_nodes.add(source_node) // Adding the node to the visited nodes.
    // Looping and reccursively calling all the neighnout of the source node and checking if they have direct path to the destination node.
    for(i of adjacency_list[source_node]){
        if(has_path3_undirectional(adjacency_list, i, destination_node, visited_nodes) == true){ return true } // Found!
    }
    return false
}

// Coverting edge_list to adjacency list
// var adjacency_list_1 = node_list_to_adjacency_list(edge_list)
// console.log(has_path3_undirectional(adjacency_list_1, 'm', 'i'))



// NOTE: a single graph can have multiple sepearte and de-atached sub graphs (like you will see in the above sample when you draw it). These each sepearted graphs are called components of the graph.

// Finding number of components in a graph
// https://youtu.be/tWVWeAqZ0WU?t=3768
// Stratergy: We select each node at a time and traverse all the possible nodes from there and also keep a track of all the visited nodes. Then we carry on with other nodes and traverse the connected nodes to it if they arent traversed earlier hence not in the visited nodes list. We also keep a count and every time we complete a traversal of nodes we did not traverse earlier, we increase the counter.


var graph3 = {
    'i': ['j', 'k'],
    'j': ['i'],
    'k': ['i', 'm', 'l'],
    'm': ['k'],
    'l': ['k'],
    'o': ['n'],
    'n': ['o'],
    'p': []
}


function components_of_graph_traversal(adjacency_list){
    var visited_node = new Set()
    var total_components = 0
    function count_components(adjacency_list, source_node){
        if(visited_node.has(source_node)){ return false }
        visited_node.add(source_node)
        // We use depth first traversal (assuming this migh be cyclic we always handle cyclic traversal loop case)
        var traversed_nodes = DFS_graph_iterative_cyclic(adjacency_list, source_node)
        for(i of traversed_nodes){
            visited_node.add(i)
        }
        return true
    }
    for(node in adjacency_list){
        if(count_components(adjacency_list, node)){ total_components = total_components + 1 }
    }
    return total_components
}

// console.log(components_of_graph_traversal(graph3))



var graph4 = {
    '0': ['8', '1', '5'],
    '1': ['0'],
    '5': ['0', '8'],
    '8': ['0', '5'],
    '2': ['3', '4'],
    '3': ['2', '4'],
    '4': ['3', '2']
}


// Checking the Largest component of the graph
// We need to return thr number of nodes in the largest component of the graph.
function find_largest_component(adjacency_list){
    var max = Number.MIN_SAFE_INTEGER
    var visited_node = new Set()
    var count = 0
    function traverse_and_count(adjacency_list, source_node, visited_node){
        if(visited_node.has(source_node)){ return 0 }
        visited_node.add(source_node)
        count = 1
        for(neighbour of adjacency_list[source_node]){
            count = count + traverse_and_count(adjacency_list, neighbour, visited_node)
        }
        return count
    }
    for(i in adjacency_list){
        var current_component_count = traverse_and_count(adjacency_list, i, visited_node)
        if(current_component_count>max){ max = current_component_count }
    }
    return max
}

// console.log(find_largest_component(graph4))



// Shortest path
// https://youtu.be/tWVWeAqZ0WU?t=5043

// There are 2 steps to finding shortest path between any 2 node:
// 1. Traversing from source to the destination
// 2. Counting distance between them.
// Now, to traverse we have we have 2 ways BFS and DFS. But BFS is more efficient as it chooses a node and the explore all of its neighbours and then moove outwards. Whereas in DFS, it keeps going in one direction untill no nodes are found and then changes direction makes more like a spiral before fidning the destination element. BFS is more like expaning outwards like concentric circles or ripples.
// To calculate the distance, we want to only traverse the graph once and hence we somehow need to keep track of the distance covered so far while traversng it. We do it by making a small change in the BFS algorithm and instead of just tracking and adding the node to the queue we add pair of the node aswell as the distance from the source so far.


var edge_list3 = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
]

var adjacency_list_3 = node_list_to_adjacency_list(edge_list3)
// console.log(adjacency_list_3)

function shortest_path(adjacency_list, source_node, destination_node){
    var visited_nodes = new Set()
    var queue = [[source_node, 0]]
    visited_nodes.add(source_node)
    while(queue.length>0){
        var current_node = queue.shift()
        console.log(current_node[0])
        if(current_node[0] == destination_node){ return current_node[1] }
        var current_distance = current_node[1]
        for(neighbour of adjacency_list[current_node[0]]){
            if(!(visited_nodes.has(neighbour))){
                queue.push([neighbour, current_distance + 1])
                visited_nodes.add(neighbour)
            }
        }
    }
    return -1 //return -1 if no path exist
}

// console.log(shortest_path(adjacency_list_3, 'w', 'v'))