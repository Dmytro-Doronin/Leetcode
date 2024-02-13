const removeElements = function(head, val) {
    if (!head) {
        return head
    }

   while (head) {
       if (head.val === val) {
           head = head.next
       } else {
           break
       }
   }

    let curr = head;
    while(curr && curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return head;
};

console.log(removeElements([1,2,6,3,4,5,6], 6))