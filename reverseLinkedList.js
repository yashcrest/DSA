function reverseLinkedList(head) {
    prev = null 
    temp = null
    curr = head
    if(curr !== null) {
        temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    head = prev
    return head
}

/*
main point is two have multiple pointers which points at next item, current item, previous item 
*/