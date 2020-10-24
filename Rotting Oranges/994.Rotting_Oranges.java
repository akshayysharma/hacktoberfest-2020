/* Problem Statement:

In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

*/


class Triplet {
    int x;
    int y;
    int time;
    public Triplet(int a, int b, int c) {
        x = a;
        y = b;
        time = c;
    }
}
class Solution {
    public int orangesRotting(int[][] grid) {
        Queue < Triplet > q = new LinkedList < > ();
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == 2) {
                    q.add(new Triplet(i, j, 0));
                }
            }
        }
        int adjx[] = {-1,
            1,
            0,
            0
        };
        int adjy[] = {
            0,
            0,
            1,
            -1
        };
        int ans = 0;
        int n = grid.length;
        int m = grid[0].length;

        while (!q.isEmpty()) {
            Triplet t = q.remove();
            ans = Math.max(ans, t.time);
            for (int i = 0; i < 4; i++) {
                int newX = t.x + adjx[i];
                int newY = t.y + adjy[i];
                if (newX >= 0 && newY >= 0 && newX < n && newY < m && grid[newX][newY] == 1) {
                    grid[newX][newY] = 2;
                    q.add(new Triplet(newX, newY, t.time + 1));
                }
            }
        }
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++)
                if (grid[i][j] == 1)
                    return -1;
        }
        return ans;
    }
}
