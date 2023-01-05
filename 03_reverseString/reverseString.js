const reverseString = function(string) {
    
    let stList = string.split('');
    let finalString = "";
    let i = 10;
    for (i = stList.length - 1; i >= 0; i--) {
        finalString += stList[i];
    }

    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
