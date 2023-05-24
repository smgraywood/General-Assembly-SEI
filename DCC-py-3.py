# Prompt:
# Given a 2D array, get the max number of each list and return the sum of maximum numbers.

# Examples:
# sum_of_maximums([[3,2,3], [5,2,8], [4,6,2]])) # 17
# sum_of_maximums([[8,2,6], [2,9,17,8], [3,6,4], [-1,-23]])) # 30
# sum_of_maximums([[1,2,3], [4,5], [6,7,8,9]])) # 17


def sum_of_maximums(arr):
    max_sum = 0 
    for sublist in arr: 
        max_num = max(sublist)
        max_num += max_num
    return max_num
