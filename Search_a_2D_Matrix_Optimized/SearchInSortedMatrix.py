# https://leetcode.com/problems/search-a-2d-matrix/

def binary_search_row(array , target,num_columns):
    column_index = 0
    start = 0
    end = num_columns
    while(start <= end):
        mid = start + (end - start) // 2
        if(array[mid] <= target):
            if(mid == num_columns or array[mid+1] > target):
                return mid
            start = mid + 1
        else:
            end = mid - 1
    return column_index

def binary_search_column(matrix,column_index , target, num_rows):
    row_index = 0
    start = 0
    end = num_rows
    while(start <= end):
        mid = start + (end - start) // 2
        if(matrix[mid][column_index] >= target):
            if(mid == 0 or matrix[mid-1][column_index] < target):
                return mid
            end = mid -1
        else:
            start = mid + 1
    return row_index

class Solution:
    # Required searchMatrix(self, matrix: List[List[int]], target: int) -> bool function
    #  is defined below
    def searchMatrix(self, matrix, target):
        if(not matrix or not matrix[0]):
            return False
        num_rows = len(matrix) - 1
        num_columns = len(matrix[0]) -1
        row_index = 0
        column_index = -1
        while(1):
            prev_row = row_index
            prev_col = column_index
            column_index = binary_search_row(matrix[row_index], target, num_columns)
            if(matrix[row_index][column_index] == target):
                return True
            if(row_index == num_rows):
                return False
            row_index = binary_search_column(matrix,column_index, target, num_rows)
            if(row_index == prev_row and column_index == prev_col):
                return False

# Driver code
# rows, columns = map(int, sys.stdin.readline().split())
# matrix = list()
# for _ in range(rows):
#     row = list(map(int, sys.stdin.readline().split()))
#     matrix.append(row)
# queries = int(sys.stdin.readline())
# for _ in range(queries):
#     target = int(sys.stdin.readline())
#     result = Solution().solve(matrix, target)
#     if result:
#         sys.stdout.write("true\n")
#     else:
#         sys.stdout.write("false\n")
