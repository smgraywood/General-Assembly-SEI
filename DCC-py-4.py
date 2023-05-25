# Prompt:
# Given an list nums of size n, return the majority element.

# The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the list.

# Examples:
# majority_element([3,2,3])) # 3
# majority_element([2,2,1,1,1,2,2]) # 2

def majority_element(nums):
    count = {}
    majority_count = len(nums) // 2 

    for num in nums:
        count[num] = count.get(num, 0) + 1

        if count[num] > majority_count:
            return num
