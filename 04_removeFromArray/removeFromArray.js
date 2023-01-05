const removeFromArray = function(items, ...args) {
    let finalArray = items.filter(item => !args.includes(item));
    return finalArray; 
};

// Do not edit below this line
module.exports = removeFromArray;
