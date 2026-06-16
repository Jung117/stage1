## Task 1
# def func1(name): 
    
#     # [x-axis, y-axis, right/left ]: left side = 2; right side = 0
#     characters = {"悟空": [0, 0, 2], "辛巴": [-3, 3, 2], "丁滿": [-1, 4, 0], 
#                   "貝吉塔": [-4, -1, 2], "特南克斯": [1, -2, 2], "弗利沙": [4, -1, 0]}
    
#     # Exit early if input character is not found
#     if name not in characters:
#         print(f"Character {name} not found.")
#         return
    
#     closest = []
#     farthest = []
#     min, max = 0, 0

#     for char in characters:
#         if char != name:
            
#             # Calculate distance from name to char  
#             distance = (abs(characters[name][0] - characters[char][0]) 
#                             + abs(characters[name][1] - characters[char][1]) 
#                                 + abs(characters[name][2] - characters[char][2]))

#             # Update max if applicable
#             if distance > max:
#                 farthest = [char]
#                 max = distance
#             elif distance is max:
#                 farthest += [char]

#             # Update min if applicable
#             if distance < min:
#                 closest = [char]
#                 min = distance
#             elif distance is min or min is 0:
#                 closest += [char]
#                 min = distance
    
#     print(f"最遠{'、'.join(farthest)}；最近{'、'.join(closest)}")

# func1("辛巴") # print 最遠弗利沙；最近丁滿、貝吉塔 
# func1("悟空") # print 最遠丁滿、弗利沙；最近特南克斯 
# func1("弗利沙") # print 最遠辛巴，最近特南克斯 
# func1("特南克斯") # print 最遠丁滿，最近悟空




## Task 2
booking = {}
def func2(ss, start, end, criteria): 

    # Terminate early if no services are available
    if not services:
        print("No services available.")
        return

    # Create time slots for each service throughout the day: available = 0; taken = 1
    if not booking:
        for service in services:
            booking[service["name"]] = [0]*24
            
    
    closest = ""
    min = float('inf')

    if criteria[0] == "c" and criteria[1] in (">", "=", "<"):
        for service in services:
            pass

    elif criteria[0] == "r" and criteria[1] in (">", "=", "<"):
        for service in services:
            pass
    elif criteria[:4] == "name" and criteria[4] == "=":
        for service in services:
            pass
    else:
        print(f"Invalid input for criteria {criteria}.")

    

services=[ 
    {"name":"S1", "r":4.5, "c":1000}, 
    {"name":"S2", "r":3, "c":1200}, 
    {"name":"S3", "r":3.8, "c":800}  
] 

# func2(services, 15, 17, "c>=800") # S3 
# func2(services, 11, 13, "r<=4") # S3 
func2(services, 10, 12, "name=S3") # Sorry 
# func2(services, 15, 18, "r>=4.5") # S1 
# func2(services, 16, 18, "r>=4") # Sorry 
# func2(services, 13, 17, "name=S1") # Sorry 
# func2(services, 8, 9, "c<=1500") # S2



## Task 3
def func3(index):
    # your code here
    pass

# func3(1) # print 23 
# func3(5) # print 21 
# func3(10) # print 16 
# func3(30) # print 6



## Task 4
def func4(sp, stat, n):
    # your code here
    pass

# func4([3, 1, 5, 4, 3, 2], "101000", 2) # print 5
# func4([1, 0, 5, 1, 3], "10100", 4) # print 4
# func4([4, 6, 5, 8], "1000", 4) # print 2