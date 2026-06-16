## Task 1
def func1(name): 
    
    # [x-axis, y-axis, right/left ]: left side = 2; right side = 0
    characters = {"悟空": [0, 0, 2], "辛巴": [-3, 3, 2], "丁滿": [-1, 4, 0], 
                  "貝吉塔": [-4, -1, 2], "特南克斯": [1, -2, 2], "弗利沙": [4, -1, 0]}
    
    # Exit early if input character is not found
    if name not in characters:
        print(f"Character {name} not found.")
        return
    
    closest = []
    farthest = []
    minDiff, maxDiff = 0, 0

    for char in characters:
        if char != name:
            
            # Calculate distance from name to char  
            distance = (abs(characters[name][0] - characters[char][0]) 
                            + abs(characters[name][1] - characters[char][1]) 
                                + abs(characters[name][2] - characters[char][2]))

            # Update maxDiff if applicable
            if distance > maxDiff:
                farthest = [char]
                maxDiff = distance
            elif distance is maxDiff:
                farthest += [char]

            # Update minDiff if applicable
            if distance < minDiff:
                closest = [char]
                minDiff = distance
            elif distance == minDiff or minDiff == 0:
                closest += [char]
                minDiff = distance
    
    print(f"最遠{'、'.join(farthest)}；最近{'、'.join(closest)}")

# func1("辛巴") # print 最遠弗利沙；最近丁滿、貝吉塔 
# func1("悟空") # print 最遠丁滿、弗利沙；最近特南克斯 
# func1("弗利沙") # print 最遠辛巴，最近特南克斯 
# func1("特南克斯") # print 最遠丁滿，最近悟空



## Task 2
booking = {}    # Available timeslots for each service

def parseHelper(attr, value):
    """
    Helper for parsing criteria value
    Returns (True, Parsed value) if valid, (False, Raw value) if invalid
    """

    if value[0] == "=":
        try:
            if value[1:] in booking:
                return True, value[1:]
            if attr == "c":
                return True, int(value[1:])
            else:
                return True, float(value[1:])
        except ValueError:
            return False, value[1:]
    else:
        try:
            if attr == "c":
                return True, int(value[2:])
            else:
                return True, float(value[2:])
        except ValueError:
            return False, value[2:]
 
 
def func2(ss, start, end, criteria): 

    # Terminate early if no services are available
    if not ss:
        print("No services available.")
        return

    # Create timeslots for each service throughout the day: available = 0; taken = 1
    if not booking:
        for service in ss:
            booking[service["name"]] = [0]*24
            
    
    closest = ""
    minDiff = float('inf')
    if criteria[0] == "c":
        # Validate and parse criteria value
        valid, value = parseHelper(criteria[0], criteria[1:])
        if not valid :
            print(f"Invalid criteria {criteria}.")
            return
        
        # Find the best matching service
        for service in ss:
            if criteria[1] == ">":
                if service["c"] >= value:
                    if (service["c"] - value) <= minDiff:
                        for i in range(start+1, end):
                            if booking[service["name"]][i] == 1:
                                break
                        else:
                            closest = service["name"]
                            minDiff = (service["c"] - value)
            else:
                if service["c"] <= value:
                    if not closest:
                        closest = service["name"]
                    if (value - service["c"]) <= minDiff:
                        for i in range(start+1, end):
                            if booking[service["name"]][i] == 1:
                                break
                        else:
                            closest = service["name"]
                            minDiff = (value - service["c"])

        # Output the result
        if not closest:
            print("Sorry")
        else:
            for i in range(start, end+1):
                booking[closest][i] = 1
            print(closest)

    elif criteria[0] == "r":
        # Validate and parse criteria value
        valid, value = parseHelper(criteria[0], criteria[1:])
        if not valid :
            print(f"Invalid criteria {criteria}.")
            return
        
        # Find the best matching service
        for service in ss:
            if criteria[1] == ">":
                if service["r"] >= value:
                    if (service["r"] - value) <= minDiff:
                        for i in range(start+1, end):
                            if booking[service["name"]][i] == 1:
                                break
                        else:
                            closest = service["name"]
                            minDiff = (service["r"] - value)  
            else:
                if service["r"] <= value:
                    if not closest:
                        closest = service["name"]
                    if (value - service["r"]) <= minDiff:
                        for i in range(start+1, end):
                            if booking[service["name"]][i] == 1:
                                break
                        else:
                            closest = service["name"]
                            minDiff = (value - service["r"])

        # Output the result
        if not closest:
            print("Sorry")
        else:
            for i in range(start, end+1):
                booking[closest][i] = 1
            print(closest)

    elif criteria[:4] == "name":
        # Validate and parse criteria value
        valid, value = parseHelper(criteria[:4], criteria[4:])
        if not valid:
            print(f"Service {criteria[5:]} not found.")
            return
        
        # Check timeslot availability 
        for i in range(start+1, end):
            if booking[value][i] == 1:
                print("Sorry")
                return
        else:
            for i in range(start, end+1):
                booking[value][i] = 1
            print(value)

    else:
        print(f"Invalid criteria {criteria}.")
    

services=[ 
    {"name":"S1", "r":4.5, "c":1000}, 
    {"name":"S2", "r":3, "c":1200}, 
    {"name":"S3", "r":3.8, "c":800}  
] 

# func2(services, 15, 17, "c>=800") # S3
# func2(services, 11, 13, "r<=4") # S3
# func2(services, 10, 12, "name=S3") # Sorry 
# func2(services, 15, 18, "r>=4.5") # S1 
# func2(services, 16, 18, "r>=4") # Sorry 
# func2(services, 13, 17, "name=S1") # Sorry 
# func2(services, 8, 9, "c<=1500") # S2


## Task 3
def func3(index):
    num = 25
    for i in range(index):
        if i % 4 == 0:
            num -= 2
        elif i % 4 == 1:
            num -= 3
        elif i % 4 == 2:
            num += 1
        else:
            num += 2
    print(num)

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