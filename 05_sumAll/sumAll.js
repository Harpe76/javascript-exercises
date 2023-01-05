const sumAll = function(first, second) {
    
    let difference;
    let smallest;

    if (first < 0 || second < 0 || !Number.isInteger(first) || !Number.isInteger(second)) {
        return "ERROR";
    }

    if (second >= first) {
        difference = second - first;
        smallest = first;
    } else {
        difference = first - second;
        smallest = second;
    }
    
    let output = 0;
    for (i = 0; i <= difference; i++) {
        output += smallest;
        smallest += 1;
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
