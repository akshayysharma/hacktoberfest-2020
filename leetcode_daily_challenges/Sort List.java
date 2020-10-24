//148. Sort List
//https://leetcode.com/problems/sort-list/
/* Problem:
Given the head of a linked list, return the list after sorting it in ascending order.
Example: 
Input: head = [4,2,1,3]
Output: [1,2,3,4]
*/
// Solution:
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode findmid(ListNode h){
        
        if(h == null){
            return null;
        }

        ListNode slow = h;
        ListNode fast = h.next;

        while(fast!=null){
            fast = fast.next;
            if(fast!=null){
                slow = slow.next;
                fast = fast.next;
            }
        }

        return slow;
    }
    public ListNode merge(ListNode left, ListNode right){
        ListNode result = new ListNode(0);
        ListNode last = result;

        while(left!=null && right!=null){
            if(left.val<=right.val){
                last.next = left;
                left = left.next;
            }
            else{
                last.next = right;
                right = right.next;
            }
            last= last.next;
        }

        if(left == null){
            last.next = right;
        }
        if(right == null){
            last.next = left;
        }

        return result.next;
    }
    public ListNode sortList(ListNode root) {
        if(root == null || root.next == null){
            return root;
        }

        ListNode middle = findmid(root);
        ListNode nextToMiddle = middle.next;

        middle.next = null;
        ListNode left = sortList(root);
        ListNode right = sortList(nextToMiddle);

        ListNode result = merge(left,right);

        return result;
    }
}
// Algorith: Merge sort, Time complexity: O(nlogn), Space complexity: O(n)