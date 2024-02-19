// Linked List
// www.youtube.com/watch?v=Hj_rA0dhr2I&ab_channel=freeCodeCamp.org

class Node{
    constructor(val=null){
        this.val = val? val : null
        this.next = null
    }
}


// Creating Nodes

var head = new Node(91)
var a = new Node(1)
var b = new Node(44)
var c = new Node(3)
var d = new Node(7)

// Relations

head.next = a
a.next = b
b.next = c
c.next = d


// Traversing through linked list

function traverse_ll_iterative(head){
    var result = []
    while(head!=null){
        result.push(head.val)
        head = head.next
    }
    return result
}

// console.log(traverse_ll_iterative(head))


function traverse_ll_recursive(head){
    if(head==null){ return [] }
    var node_values = traverse_ll_recursive(head.next)
    return [head.val, ...node_values]
}

// console.log(traverse_ll_recursive(head))

// NOTE: The above stratergy to traverse can be used in questions like summing the nodes, printing all the nodes, searching for a node etc.

// Sum of all the nodes
function sum_ll_recursive(head){
    if(head==null){ return 0 }
    return head.val + sum_ll_recursive(head.next)
}

// console.log(sum_ll_recursive(head))


// Searching for a node
function search_ll(head, target){
    if(head==null){ return false }
    if(head.val==target){ return true }
    return search_ll(head.next, target)
}

// console.log(search_ll(head, 31))


// Finding value at a perticular node (index/position)
// We will be given a position/index and we need to fund the value at that node (consideing the index starts from 0)
function val_at_index_iterative(head, index){
    var count = 0
    while(true){
        if(head==null){ return -1 }
        if(count == index-1){ return head.val }
        head=head.next
        count += 1
    }
}

// console.log(val_at_index_iterative(head, 4))


function val_at_index_recursive(head, index, current_index=0){
    if(head==null){ return -1 }
    if(index == current_index){ return head.val }
    return val_at_index_recursive(head.next, index, current_index+1)
}

// console.log(val_at_index_recursive(head, 4))


// Reversing a linkedlist
function ll_reverse_iterative(head){
    var prev = null
    var current = head
    while(current!=null){
        var next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}

// console.log(traverse_ll_recursive(ll_reverse_iterative(head)))


function ll_reverse_recursive(head, prev=null){
    if(head==null){ return prev }
    var next = head.next
    head.next = prev
   return ll_reverse_recursive(next, head)
}

// console.log(traverse_ll_recursive(ll_reverse_recursive(head)))
