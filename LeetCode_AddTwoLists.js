/** LeetCode - Q2 - Medium
 * You are given two linked lists representing two non-negative numbers. 
 * The digits are stored in reverse order and each of their nodes contain a single digit. 
 * Add the two numbers and return it as a linked list.
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    var sum = new ListNode(0);
    var reSum = sum;
    
    while(l1 !== null || l2 !== null) {
        // sum = sum / 10;
        if (l1 === null) {
            sum.val += l2.val % 10;
            l2 = l2.next;
        } else if (l2 === null) {
            sum.val += l1.val % 10;
            l1 = l1.next;
        } else {
            sum.val += l1.val + l2.val;
            l1 = l1.next;
            l2 = l2.next;
        }
        if (l1 !== null || l2 !== null || sum.val >= 10) {
            sum.next = new ListNode(parseInt(sum.val/10));
            sum.val %= 10;
            sum = sum.next;
        }
    }
    
    return reSum;
    
};