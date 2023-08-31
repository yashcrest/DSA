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