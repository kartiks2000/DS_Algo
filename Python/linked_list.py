class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next

head = Node(1)
a = Node(2)
b = Node(3)
c = Node(4)

head.next = a
a.next = b
b.next = c

# Iterative prinring data of a LL
def print_ll_iterative(head):
    iter = head
    while(iter!=None):
        print(iter.data)
        iter = iter.next

# print_ll_iterative(head)

# Recursive printing of a LL
def print_ll_recursive(head):
    if head==None:
        return []
    return [head.data] + print_ll_recursive(head.next)

# print(print_ll_recursive(head))


# Iterative sum of LL
def sum_ll_iter(head):
    iter = head
    sum = 0
    while iter!=None:
        sum += iter.data
        iter = iter.next
    return sum

# print(sum_ll_iter(head))


# Recursive sum of LL
def sum_ll_recursive(head):
    if head is None:
        return 0
    return head.data + sum_ll_recursive(head.next)

# print(sum_ll_recursive(head))

# Search a element in LL recursive
def search_recursive(head, target):
    if head is None:
        return False
    if head.data is target:
        return True
    return search_recursive(head.next, target) or False

# print(search_recursive(head, 3))


# Reversing LL iterative
def reverse_ll_iterative(head):
    prev = None
    current = head
    while current!=None:
        next = current.next
        current.next = prev
        prev = current
        current = next
    return prev
# new_head = reverse_ll_iterative(head)
# print(print_ll_recursive(new_head))

# Reversing LL recursive
def reverse_ll_recursive(head, prev=None):
    if head is None:
        return prev
    next = head.next
    head.next = prev
    prev = head
    head = next
    return reverse_ll_recursive(head, prev)

# new_head = reverse_ll_recursive(head)
# print(print_ll_recursive(new_head))

# Second LL
head2 = Node(100)
a2 = Node(101)
b2 = Node(102)
c2 = Node(103)
d2 = Node(104)
e2 = Node(105)
f2 = Node(106)

head2.next = a2
a2.next = b2
b2.next = c2
c2.next = d2
d2.next = e2
e2.next = f2

# print_ll_iterative(head2)

# Zipping both LL
def zipping_ll_iter(head, head2):
    res_head = head
    preserved_res_head = res_head
    head = head.next
    # res_tail = None
    while(head is not None or head2 is not None):
        if head2!=None:
            res_head.next = head2
            res_head = res_head.next
            head2 = head2.next

        if head!=None:
            res_head.next = head
            res_head = res_head.next
            head = head.next

    if head!=None:
        res_head.next = head2
    if head2!=None:
        res_head.next = head
    print(print_ll_iterative(preserved_res_head))
zipping_ll_iter(head, head2)

