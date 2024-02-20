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


// Zipping 2 liked lists
// LL1 = 1 -> 2 -> 3
// LL2 = 4 -> 5 -> 6 -> 7
// Resultant LL = 1 -> 4 -> 2 -> 5 -> 3 -> 6 -> 7

var head1 = new Node(1);
var a1 = new Node(2);
var b1 = new Node(3);

head1.next = a1;
a1.next = b1;


// Linked List 2
var head2 = new Node(4);
var a2 = new Node(5);
var b2 = new Node(6);
var c2 = new Node(7);

head2.next = a2;
a2.next = b2;
// b2.next = c2

// console.log(traverse_ll_recursive(head1))
// console.log(traverse_ll_recursive(head2))

function zipping_ll_iterative(head1, head2){
    // Taking head of ll head1 as the head of the resultant ll
    var result_head = head1
    var result_tail = result_head
    head1 = head1.next
    while(head1!=null && head2!=null){ // We want to end loop as soon as one of the ll is finished and later attach the left over part of the longer ll to make it effiecient.
        // Adding node from head2 ll
        if(head2!=null){
            result_tail.next = head2
            result_tail = result_tail.next
            head2 = head2.next
        }
        // Adding node from head1 ll
        if(head1!=null){
            result_tail.next = head1
            result_tail= result_tail.next
            head1 = head1.next
        }
    }


    // We could have used the condition (head1!=null || head2!=null) in the loop, but to avoid the loop from unnecessary iterations we directly atatched the left over nodes of the larger ll if the other one has no nodes left.
    if(head1!=null){
        result_tail.next = head1
    }

    if(head2!=null){
        result_tail.next = head2
    }

    return result_head
}

// console.log(traverse_ll_recursive(zipping_ll_iterative(head1, head2)))



function zipping_ll_recursive(head1, head2){
    if(head1==null && head2==null){ return null }
    if(head1==null){ return head2 }
    if(head2==null){ return head1 }

    var next1 = head1.next
    var next2 = head2.next
    head1.next = head2

    head2.next = zipping_ll_recursive(next1, next2)
    return head1
}

// console.log(traverse_ll_recursive(zipping_ll_recursive(head1, head2)))
