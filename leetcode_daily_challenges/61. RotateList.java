/*
Problem Statement :
Given a linked list, rotate the list to the right by k places, where k is non-negative.

Example:

Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL
*/

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
    public ListNode rotateRight(ListNode head, int k) {
        if(head==null || k==0){
            return head;
        }
        int n=0;
        ListNode temp = head;
        while(temp!=null){           //count nodes in list
            n++;
            temp=temp.next;            
        }
        if(n==1){
            return head;
        }
        k = k%n;
        if(k==0){
            return head;
        }
        int cnt = n-k-1;
        temp = head;
        ListNode nh = null;
        while(cnt>0){
            temp = temp.next;
            cnt--;
        }
        nh = temp.next;       //nh = new head
        temp.next = null;
        ListNode t = nh;
        while(t!=null && t.next!=null){
            t = t.next;
        }
        t.next = head;
        return nh;
    }
}