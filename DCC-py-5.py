# Given a sorted array of distinct integers and a target value, return the index if the target is found. 
#If not, return the index where it would be if it were inserted in order.

# Examples:
# search_insert([1, 3, 5, 7], 5) # 2
# search_insert([1, 3, 5, 6, 9], 2) # 1
# search_insert([1, 3, 6], 7) # 3

def search_insert(arr, target):
    try:
        return arr.index(target)
    except ValueError:
        for i, num in enumerate(arr):
            if num > target:
                return i
        return len(arr)
