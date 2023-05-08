const fibonacci = function(number) {
    let numberInt = parseInt(number);
    if(numberInt <= 0) {
        return "OOPS";
    }

    let sequence = [1,1];
    
    for (i = 2; i < 1000; i++){
        sequence[i] = sequence[i - 1] + sequence[i - 2]
    }

    return sequence[numberInt - 1];

};

// Do not edit below this line
module.exports = fibonacci;
