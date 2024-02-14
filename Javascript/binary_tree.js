// https://www.youtube.com/watch?v=fAAZixBzIAI&ab_channel=freeCodeCamp.org

// https://www.youtube.com/playlist?list=PLNmW52ef0uwtUY4OFRF0eV1mlT5lKhe_j

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

// console.log(search_element_BFS_iterative(17, head))



// Sum of all the nodes of Tree using DFS Iterative
// Time complexity: O(n) || Space complexity: O(n)

function sum_DFS_iterative(head){
    if(head == null){return 0}
    var stack = [head]
    var sum = 0

    while(stack.length > 0){
        var current_node = stack.pop()
        sum = sum + current_node.val
        if(current_node.left != null) {stack.push(current_node.left)}
        if(current_node.right != null) {stack.push(current_node.right)}
    }
    return sum
}

// console.log(sum_DFS_iterative(head))



// Sum of all the nodes of Tree using DFS Recursive
// Time complexity: O(n) || Space complexity: O(n)

function sum_DFS_recursive(head){
    if(head == null) {return 0}
    return head.val + sum_DFS_recursive(head.left) + sum_DFS_recursive(head.right)
}

// console.log(sum_DFS_recursive(head))



// Sum of all the nodes of Tree using BFS Iterative
// Time complexity: O(n) || Space complexity: O(n)

function sum_BFS_iterative(head){
    if(head == null) {return 0}
    var queue = [head]
    var sum = 0

    while(queue.length > 0){
        var current_node = queue.shift()
        sum = sum + current_node.val
        if(current_node.left != null){queue.push(current_node.left)}
        if(current_node.right != null){queue.push(current_node.right)}
    }
    return sum
}

// console.log(sum_BFS_iterative(head))


// A Valid BST

//     10
//    / \
//   9   18
//  /    / \
// 7    15  20
//          / \
//         19  21
//


// var bst_head = new Node(10)
// var bst_a = new Node(9)
// var bst_b = new Node(18)
// var bst_c = new Node(7)
// var bst_d = new Node(15)
// var bst_e = new Node(20)
// var bst_f = new Node(19)
// var bst_g = new Node(21)

// bst_head.left = bst_a
// bst_head.right = bst_b
// bst_a.left = bst_c
// bst_b.left = bst_d
// bst_b.right = bst_e
// bst_e.left = bst_f
// bst_e.right = bst_g




// Checking if a Binary Tree is a BST (All the parent nodes should be greater or equal to left child and smaller than the right child, this should hold true for every possible subtrees of the tree)
// Time complexity: O(n) || Space complexity: O(n)

// Assumed definition of a valid BST: no parent is equal or smaller than its left children AND no parent is equal or greater than its right children.
// We can also assume and make changes to code to accept the Tree whose parent can be equal or greater than its left child. Condition: (if(node.val>max || node.val<=min) { return false })

function is_BST(node, min=Number.MIN_SAFE_INTEGER, max=Number.MAX_SAFE_INTEGER){
    if(node==null){return true}
    if(node.val>=max || node.val<=min) { return false }
    return is_BST(node.left, min, node.val ) && is_BST(node.right, node.val, max)
}


// console.log(is_BST(bst_head))



// Finding the minimum element of the Tree (any tree, not just BST) [Using DFS Iterative]
// Time complexity: O(n) || Space complexity: O(n)

function find_minumum_element_dfs_iterrative(head){
    if(head == null){ return Infinity }
    var stack = [ head ]
    var minimum = Infinity

    while(stack.length>0){
        var current_node = stack.pop()
        if(current_node.val<minimum){ minimum = current_node.val }
        if(current_node.left != null){stack.push(current_node.left)}
        if(current_node.right != null){stack.push(current_node.right)}
    }
    return minimum
}

// console.log(find_minumum_element_dfs_iterrative(head))


// Finding the minimum element of the Tree (any tree, not just BST) [Using DFS Recursive]
// Time complexity: O(n) || Space complexity: O(n)

function find_minumum_element_recursive(head){
    if(head == null){ return Infinity; }
    var left_min = find_minumum_element_recursive(head.left)
    var right_min = find_minumum_element_recursive(head.right)
    return Math.min(head.val, left_min, right_min)
}

// console.log(find_minumum_element_recursive(head))


// Finding the minimum element of the Tree (any tree, not just BST) [Using BFS Iterative]
// Time complexity: O(n) || Space complexity: O(n)

function find_minumum_element_bfs_iterrative(head){
    if(head == null){ return Infinity }
    var queue = [ head ]
    var minimum = Infinity

    while(queue.length>0){
        var current_node = queue.shift()
        if(current_node.val<minimum){ minimum = current_node.val }
        if(current_node.left != null){queue.push(current_node.left)}
        if(current_node.right != null){queue.push(current_node.right)}
    }
    return minimum
}

// console.log(find_minumum_element_bfs_iterrative(head))


// Finding the largest sum of a path starting from root to a leaf node
// Time complexity: O(n) || Space complexity: O(n)
// https://youtu.be/fAAZixBzIAI?t=5657

function max_sum_root_to_leaf(head){
    if(head == null) { return -Infinity }
    if(head.left == null && head.right == null){ return head.val }
    var max_child_path_sum = Math.max(max_sum_root_to_leaf(head.left), max_sum_root_to_leaf(head.right))
    return max_child_path_sum + head.val
}

// console.log(max_sum_root_to_leaf(head))



// Finding height of tree
// Time complexity: O(n) || Space complexity: O(n)
// Value of height and depth are same but the way we calculate them are different.
// The depth of a node is the number of edges present in path from the root node of a tree to that node. The height of a node is the number of edges present in the longest path connecting that node to a leaf node.

function find_height_of_tree(head){
    if(head==null){ return 0 }
    if(head.left==null && head.right==null){ return 1 }
    var max_height = Math.max(find_height_of_tree(head.left), find_height_of_tree(head.right))
    return max_height + 1
}

// console.log(find_height_of_tree(head))

//     1
//    / \
//   2   3
//  / \ / \
// 4  5 6  7

// Tree 1

// var head1 = new Node(1)
// var head1_a = new Node(2)
// var head1_b = new Node(3)
// var head1_c = new Node(4)
// var head1_d = new Node(5)
// var head1_e = new Node(6)
// var head1_f = new Node(7)

// head1.left = head1_a
// head1.right = head1_b
// head1_a.left = head1_c
// head1_a.right = head1_d
// head1_b.left = head1_e
// head1_b.right = head1_f



//     1
//    / \
//   2   3
//  / \ / \
// 4  5 6  7

// Tree 2

// var head2 = new Node(1)
// var head2_a = new Node(2)
// var head2_b = new Node(3)
// var head2_c = new Node(4)
// var head2_d = new Node(5)
// var head2_e = new Node(6)
// var head2_f = new Node(7)

// head2.left = head2_a
// head2.right = head2_b
// head2_a.left = head2_c
// head2_a.right = head2_d
// head2_b.left = head2_e
// head2_b.right = head2_f



// Checking if two trees are identical

function check_identical_trees(head1, head2){
    if(head1==null && head2==null) { return true } // If both trees end together
    if(head1==null || head2==null) { return false } // If any of the one tree end but the other does not
    if(head1.val != head2.val) { return false }
    var identical_bool = (check_identical_trees(head1.left, head2.left) && check_identical_trees(head1.right, head2.right))
    return identical_bool
}

// console.log(check_identical_trees(head1, head2))
