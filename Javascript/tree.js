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


// ######## A Valid BST sample case ##########

//     10
//    / \
//   9   18
//  /    / \
// 7    15  20
//          / \
//         19  21
//


var bst_head = new Node(10)
var bst_a = new Node(9)
var bst_b = new Node(18)
var bst_c = new Node(7)
var bst_d = new Node(15)
var bst_e = new Node(20)
var bst_f = new Node(19)
var bst_g = new Node(21)

bst_head.left = bst_a
bst_head.right = bst_b
bst_a.left = bst_c
bst_b.left = bst_d
bst_b.right = bst_e
bst_e.left = bst_f
bst_e.right = bst_g




// Checking if a Tree is a BST (All the parent nodes should be greater or equal to left child and smaller than the right child, this should hold true for every possible subtrees of the tree)
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
    if(head.left==null && head.right==null){ return 1 } // This line depends on whats the definition of Height of Tree (is it number of elements or edges)
    var max_height = Math.max(find_height_of_tree(head.left), find_height_of_tree(head.right))
    return max_height + 1
}

// console.log(find_height_of_tree(head))



// ######## Identical Trees sample testcase #########

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




// ######## Mirror Trees sample testcase #########

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
//   3   2
//  / \ / \
// 7  6 5  4

// Tree 2

// var head2 = new Node(1)
// var head2_a = new Node(2)
// var head2_b = new Node(3)
// var head2_c = new Node(4)
// var head2_d = new Node(5)
// var head2_e = new Node(6)
// var head2_f = new Node(7)

// head2.left = head2_b
// head2.right = head2_a
// head2_a.left = head2_d
// head2_a.right = head2_c
// head2_b.left = head2_f
// head2_b.right = head2_e



// Checking if two trees are Mirror of each other
// Its same as the finding identical question, only the order of comparing changes hence the recursive calls change (Now we compare tree1 left nodes to tree2 right nodes & tree1 right nodes to tree2 left nodes)
// We can also make a variation in which we can see if a subtrees of a tree are mirror.

function check_mirror_trees(head1, head2){
    if(head1==null && head2==null) { return true } // If both trees end together
    if(head1==null || head2==null) { return false } // If any of the one tree end but the other does not
    if(head1.val != head2.val) { return false }
    var mirror_bool = (check_mirror_trees(head1.left, head2.right) && check_mirror_trees(head1.right, head2.left))
    return mirror_bool
}

// console.log(check_mirror_trees(head1, head2))



// ######## Symmetric Trees sample testcase #########

//     1
//    / \
//   2   2
//  / \ / \
// 4  6 6  4

// Tree 1

// var head2 = new Node(1)
// var head2_a = new Node(2)
// var head2_b = new Node(2)
// var head2_c = new Node(4)
// var head2_d = new Node(4)
// var head2_e = new Node(6)
// var head2_f = new Node(6)

// head2.left = head2_a
// head2.right = head2_b
// head2_a.left = head2_c
// head2_a.right = head2_f
// head2_b.left = head2_e
// head2_b.right = head2_d


// Checking semmetric tree
// If you see, we basically need to proove that the subtree left and right of this tree are mirror of each other.
// There is a relationship between a tree being a mirror and being symmetric. In fact, a tree is symmetric if and only if it is a mirror image of itself.
// Below sollution is basically using the check mirror code on the left and right hand side of the tree.

function check_symmetric_tree(head1, head2){
    if(head1==null && head2==null) { return true } // If both trees end together
    if(head1==null || head2==null) { return false } // If any of the one tree end but the other does not
    if(head1.val != head2.val) { return false }
    var mirror_bool = (check_symmetric_tree(head1.left, head2.right) && check_symmetric_tree(head1.right, head2.left))
    return mirror_bool
}

// console.log(check_symmetric_tree(head2.left, head2.right))



//  Number of nodes in a tree

function find_number_of_nodes(head){
    if(head==null){ return 0 }
    return find_number_of_nodes(head.left) + find_number_of_nodes(head.right) + 1
}

// console.log(find_number_of_nodes(head))




// Diameter of tree (passing through the parent node)
// Time complexity: O(2n) => O(n) || Space complexity: O(2n) => O(n)

function find_diameter_passing_root(tree_head){
    function tree_height(head){
        if(head==null){ return 0 }
        var height_max = Math.max(tree_height(head.left), tree_height(head.right))
        return height_max + 1
    }
    var tree_left_height = tree_height(tree_head.left)
    var tree_right_height = tree_height(tree_head.right)
    return tree_left_height + tree_right_height
}


// console.log(find_diameter_passing_root(head))



// ############# Sample for finding longest diameter ###########3

    //         5
    //        /
    //       7
    //      / \
    //     16  3
    //    /   /
    //   30  29


// Declaring Nodes

// var head3 = new Node(5)


// var head3_a = new Node(7)
// var head3_c = new Node(16)
// var head3_d = new Node(3)
// var head3_e = new Node(4)
// var head3_f = new Node(29)
// var head3_g = new Node(30)


// // Relations

// head3.left = head3_a
// head3_a.left = head3_c
// head3_a.right = head3_d
// head3_d.left = head3_f
// head3_c.left = head3_g



// ############ Sample 2 ###############



//     10
//    / \
//   9   18
//  /    / \
// 7    15  20
//          / \
//         19  21
//


var head4 = new Node(10)
var head4_a = new Node(9)
var head4_b = new Node(18)
var head4_c = new Node(7)
var head4_d = new Node(15)
var head4_e = new Node(20)
var head4_f = new Node(19)
var head4_g = new Node(21)

head4.left = head4_a
head4.right = head4_b
head4_a.left = head4_c
head4_b.left = head4_d
head4_b.right = head4_e
head4_e.left = head4_f
head4_e.right = head4_g



// ################## Sample 3 ######################


//       10
//      /  \
//     9    18
//    /    /  \
//   7    15  20
//       / \
//      19 21


var head5 = new Node(10)
var head5_a = new Node(9)
var head5_b = new Node(18)
var head5_c = new Node(7)
var head5_d = new Node(15)
var head5_e = new Node(20)
var head5_f = new Node(19)
var head5_g = new Node(21)

head5.left = head5_a
head5.right = head5_b
head5_a.left = head5_c
head5_b.left = head5_d
head5_b.right = head5_e
head5_e.left = head5_f
head5_e.right = head5_g



// Diameter of tree (NOT necessarily passing through the parent node)
// Time complexity: O(n^2) || Space complexity: O(n^2)

// Its not a efficient sollution (Its Bruteforce), we are taking all the nodes once at a time and then calculating its left and right height and the selecting the node with maximum sum of heights.

var max_height = -Infinity
function find_diameter_of_tree(tree_head){
    if(tree_head==null){ return 0 }
    function tree_height(head){
        if(head==null){ return 0 }
        var height_max = Math.max(tree_height(head.left), tree_height(head.right))
        return height_max + 1
    }

    max_height = Math.max(max_height, (tree_height(tree_head.left) + tree_height(tree_head.right)))

    find_diameter_of_tree(tree_head.left)
    find_diameter_of_tree(tree_head.right)

    return max_height
}

// console.log(find_diameter_of_tree(head5))




// Efficient way to calculate Diameter of tree (NOT necessarily passing through the parent node)
// Time complexity: O(n) || Space complexity: O(n)

// In this sollution instead of looping through all the nodes and then calculating the height of all the subtrees wrt each nodes, We just calculate the height of the tree (using the same function we did to calculate the height) But we just add a line which keeps a variable of max value of the sum of left_subtree_height and right_subtree_height. By this when the recurssive stack starts to iterate from bottom up, we keep updating the both left and right subtrees and at last we have the maximum value of the diameter in the tree.
// https://youtu.be/Toe0UQMWhjM?t=422

var max_diameter = 0
function find_diameter_of_tree_efficent(tree_head){
    var max_diameter = -Infinity;
    function tree_height(node){
        if(node==null){ return 0 }
        var left_subtree_height = tree_height(node.left)
        var right_subtree_height = tree_height(node.right)
        max_diameter = Math.max(max_diameter, (left_subtree_height, right_subtree_height + 1)) // Extra line added to track the max value of (left_sub_tree_height + right_sub_tree_height so far)
        return Math.max(left_subtree_height, right_subtree_height) + 1
    }
    tree_height(tree_head)
    return max_diameter
}

// console.log(find_diameter_of_tree_efficent(head5))



// Checking if a tree is balanced
// Time complexity: O(n) || Space complexity: O(n)
// Balanced tree -> A height balanced binary tree is a binary tree in which the height of the left subtree and right subtree of any node does not differ by more than 1 and both the left and right subtree are also height balanced.

// Using the same optimization we used in the O(n) method for finding diameter of the tree. We calculate the height of the tree and in the meanwhile we also keep a track of every left_sub_tree and right_sub_tree height, if its <=1.

function check_balanced_tree(tree_head){
    var balanced_boolean = true
    function tree_height(head){
        if(!head){ return true }
        var left_subtree_height = tree_height(head.left)
        var right_subtree_height = tree_height(head.right)
        var height_diff = Math.abs((left_subtree_height - right_subtree_height)) // Calculating diff in height for each node on its left and right.
        balanced_boolean = balanced_boolean && (height_diff <= 1) // Keeping track of a boolean checking if a tree is balanced.
        return Math.max(left_subtree_height, right_subtree_height) + 1
    }
    tree_height(tree_head)
    return balanced_boolean
}

// console.log(check_balanced_tree(bst_head))



// ################## Sample for checking child sum property ###################

//     10
//    / \
//   6   4
//  / \   \
// 3   3   4


// var head6 = new Node(10);
// var head6_a = new Node(6);
// var head6_b = new Node(4);
// var head6_c = new Node(3);
// var head6_d = new Node(3);
// var head6_e = new Node(4);

// Relations

// head6.left = head6_a;
// head6.right = head6_b;
// head6_a.left = head6_c;
// head6_a.right = head6_d;
// head6_b.right = head6_e;




// Children Sum Property in a Binary Tree (parent node value = right child value + left child value)
// Time complexity: O(n) || Space complexity: O(n)
// We used the same optimization using the height of tree concept.

function check_children_sum(tree_head){
    var children_sum_bool = true
    function tree_height(node){
        if(node==null || (node.left==null && node.right==null)){ return 0 } // The change in condition is to handle the leaves nodes to not check for their null children
        var left_child_val = node.left != null? node.left.val : 0
        var right_child_val = node.right != null? node.right.val : 0
        if((left_child_val + right_child_val) == node.val){ console.log(node?.left?.val? node?.left?.val : 0, node?.right?.val? node?.right?.val : 0, node.val) } // Uncomment this line to print the values repecting the parent child sum property (It print zero for the null nodes)
        if((left_child_val + right_child_val) != node.val){ children_sum_bool = children_sum_bool && false }
        return Math.max(tree_height(node.left), tree_height(node.right)) + 1
    }
    tree_height(tree_head)
    return children_sum_bool
}

// console.log(check_children_sum(head6))



