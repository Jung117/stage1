console.log("Hello!");
// Task 1
function func1(name) {

    // Create Map for each character
    const characters = new Map();
    characters.set("悟空", [0, 0, 2]);
    characters.set("辛巴", [-3, 3, 2]);
    characters.set("丁滿", [-1, 4, 0]);
    characters.set("貝吉塔", [-4, -1, 2]);
    characters.set("特南克斯", [1, -2, 2]);
    characters.set("弗利沙", [4, -1, 0]);

    if (!characters.has(name)) {
        console.log("Character " + name + " not found.");
        return;
    }

    let closest = [];
    let farthest = [];
    let minDiff = 0, maxDiff = 0;
    let distance = 0;

    characters.forEach((pos, char) => {
        if (char != name) {
            // Calculate distance between character and name
            distance = (Math.abs(characters.get(name)[0] - pos[0]) +
                        Math.abs(characters.get(name)[1] - pos[1]) + 
                          Math.abs(characters.get(name)[2] - pos[2]));
            
            
            
            // Update maxDiff if applicable
            
            if (distance > maxDiff) {
                farthest = [char];
                maxDiff = distance;
            } else if (distance == maxDiff) {
                farthest.push(char);
            }

            // Update minDiff if applicable
            if (distance < minDiff) {
                closest = [char];
                minDiff = distance;
            } else if (distance == minDiff || minDiff == 0) {
                closest.push(char);
                minDiff = distance;
            }
    
            
        
        }
    });
    console.log("最遠" + farthest.join("、") + "；最近" + closest.join("、"));
} 

// func1("辛巴"); // print 最遠弗利沙；最近丁滿、貝吉塔 
// func1("悟空"); // print 最遠丁滿、弗利沙；最近特南克斯 
// func1("弗利沙"); // print 最遠辛巴，最近特南克斯 
// func1("特南克斯"); // print 最遠丁滿，最近悟空


/*
// Task 2
// your code here, maybe function 
func2(ss, start, end, criteria) { 
    // your code here 
} 
const services=[ 
    {"name":"S1", "r":4.5, "c":1000}, 
    {"name":"S2", "r":3, "c":1200}, 
    {"name":"S3", "r":3.8, "c":800} 
]; 

func2(services, 15, 17, "c>=800"); // S3 
func2(services, 11, 13, "r<=4"); // S3 
func2(services, 10, 12, "name=S3"); // Sorry 
func2(services, 15, 18, "r>=4.5"); // S1 
func2(services, 16, 18, "r>=4"); // Sorry 
func2(services, 13, 17, "name=S1"); // Sorry 
func2(services, 8, 9, "c<=1500"); // S2
*/



// Task 3
function func3(index) { 
    let num = 25;
    for (let i=0; i < index; i++) {
        if (i % 4 == 0) {
            num -= 2;
        } else if (i % 4 == 1) {
            num -= 3;
        } else if (i % 4 == 2) {
            num += 1;
        } else {
            num += 2;
        }
    }
    console.log(num);
}

// func3(1); // print 23 
// func3(5); // print 21 
// func3(10); // print 16 
// func3(30); // print 6



// Task 4
function func4(sp, stat, n) { 
    let car = -1;
    let vacancy = Infinity;
    let overflow = Infinity;

    for (let i=0; i < stat.length; i++) {
        // Check for avaiable cars
        if (parseInt(stat[i]) == 0) {
            if (sp[i] == n) {
                console.log(i);
                return;
            } else if (sp[i] > n) {
                if ((sp[i] - n) < vacancy) {
                    car = i;
                    vacancy = sp[i] - n;
                }
            } else if (sp[i] < n && vacancy == Infinity) {
                if ((n - sp[i]) < overflow) {
                    car = i;
                    overflow = n - sp[i];
                }
            }
        }
    }
    console.log(car)
}

// func4([3, 1, 5, 4, 3, 2], "101000", 2); // print 5 
// func4([1, 0, 5, 1, 3], "10100", 4); // print 4 
// func4([4, 6, 5, 8], "1000", 4); // print 2

