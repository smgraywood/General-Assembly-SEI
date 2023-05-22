# Prompt:
# Write a function called fizz_buzz that accepts a single numeric argument called max_num and returns a list.

# The function code block will include:
# - A list called `fb_list` that collects each element
# - A variable `count` assigned the integer: 1
# - count could be assigned from a range of 1 → max_num using an iterator (Hint: look at what range class does in python)

# For each iteration:
# - appending to bf_list one of four things for each number:
#     - If the number is divisible by 3, append "fizz".
#     - If the number is divisible by 5, append "buzz".
#     - If the number is divisible by 3 and 5, append "fizzbuzz".

# fizzbuzz(5) # [1, 2, 'fizz', 4, 'buzz']
# fizzbuzz(15) # [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz']

def fizz_buzz (max_num):
    fb_list = []
    count = 1
    for num in range(count, max_num + count):
        if num % 3 == 0 and num % 5 == 0:
            fb_list.append("fizzbuzz")
        elif num % 3 == 0:
            fb_list.append("fizz")
        elif num % 5 == 0:
            fb_list.append("buzz")
        else:
            fb_list.append(num)
    return fb_list 
