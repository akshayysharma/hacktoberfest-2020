/* Problem Statement:
You are given the root of a binary tree where each node has a value 0 or 1.  
Each root-to-leaf path represents a binary number starting with the most significant bit.  
For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.
Return the sum of these numbers. The answer is guaranteed to fit in a 32-bits integer.
*/


/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    static int sum;
    public void sumRootToLeaf(TreeNode root, int curr) {
        if (root == null) {
            return;
        }
        if (root.left == null && root.right == null) {
            curr = ((curr << 1) | root.val);
            sum += curr;
            return;
        }
        curr = ((curr << 1) | root.val);
        sumRootToLeaf(root.left, curr);
        sumRootToLeaf(root.right, curr);


    }
    public int sumRootToLeaf(TreeNode root) {
        sum = 0;
        sumRootToLeaf(root, 0);
        return sum;
    }
}
