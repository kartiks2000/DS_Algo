class Node {
    constructor(val=null, left=null, right=null){
        this.val = val? val : null
        this.left = left? left :null
        this.right = right? right : null
    }
}


//     5
//    / \
//   7   20
//  / \    \
// 16  3    4
//    /
//   29

// DFS (Depth-First Search): 5 7 16 3 29 20 4
// Time complexity: O(n) || Space complexity: O(n)

// BFS (Breadth-first search): 5 7 20 16 3 4 29
// Time complexity: O(n) || Space complexity: O(n)

// The above complexity is based on the assumption of using an efficient Queue and Stack capable of adding and removing elememts in O(1).


// Declaring Nodes

var head = new Node(5)
// console.log("Head -> value", head.val)
// console.log("Head -> left", head.left)
// console.log("Head -> right", head.right)

var a = new Node(7)
var b = new Node(20)
var c = new Node(16)
var d = new Node(3)
var e = new Node(4)
var f = new Node(29)


// Relations

head.left = a
head.right = b
a.left = c
a.right = d
d.left = f
b.right = e


// DFS Iterative

function TreeDFS_iterative(head){
    if (head==null){
        console.log("Exmpty tree.")
    }
    var bfs = []
    var stack =[]
    stack.push(head)

    while(stack.length > 0){
        var current_node = stack.pop()
        bfs.push(current_node.val)
        // Checking right child
        if (current_node.right != null) stack.push(current_node.right)
        if (current_node.left != null) stack.push(current_node.left)
    }
    return bfs
}

// console.log(TreeDFS_iterative(head))


// DFS Recursive

function TreeDFS_recursive(head){
    if (head == null){
        console.log("Exmpty tree.")
        return []
    }
    var a = TreeDFS_recursive(head.left)
    var b = TreeDFS_recursive(head.right)

    return [head.val, ...a, ...b]
}

// console.log(TreeDFS_recursive(head))



// BFS Iterative

function TreeBFS_iterative(head){
    if (head==null){
        console.log("Exmpty tree.")
    }
    var queue = [head]
    var bfs = []

    while(queue.length > 0){
        var current_node = queue.shift()
        bfs.push(current_node.val)
        if (current_node.left != null) {queue.push(current_node.left)}
        if (current_node.right != null) {queue.push(current_node.right)}
    }
    return bfs
}

// console.log(TreeBFS_iterative(head));



// BFS Recursive
// BFS does not have an efficient recursive approach, as BFS uses a Queue to empliment and using Recursion uses Stack under the hood which doesnt really align with the implimentation of BFS.





// Searching an element using DFS Iterative
// Time complexity: O(n) || Space complexity: O(n)

function search_element_DFS_iterative(target, head){
    if(head == null){
        console.log("Empty Tree.")
        return false
    }
    var stack = [head]

    while(stack.length > 0){
        var current_node = stack.pop()
        if(current_node.val == target) {return true}
        if(current_node.left != null) {stack.push(current_node.left)}
        if(current_node.right != null) {stack.push(current_node.right)}
    }
    return false
}

// console.log(search_element_DFS_iterative(16, head))




// Searching an element using DFS Recursive
// Time complexity: O(n) || Space complexity: O(n)

function search_element_DFS_recursive(target, head){
    if (head == null) {return}
    if (head.val == target) {return true}
    var a = search_element_DFS_recursive(target, head.left)
    var b = search_element_DFS_recursive(target, head.right)
    return a || b
}

// console.log(search_element_DFS_recursive(17, head))




// Searching an element using BFS Iterative
// Time complexity: O(n) || Space complexity: O(n)

function search_element_BFS_iterative(target, head){
    if (head == null){
        console.log("Empty Tree.")
        return false
    }
    var queue = [head]

    while(queue.length > 0){
        var current_node = queue.shift()
        if(current_node.val == target){return true}
        if(current_node.left != null){queue.push(current_node.left)}
        if(current_node.right != null){queue.push(current_node.right)}
    }
    return false
}

console.log(search_element_BFS_iterative(17, head))
