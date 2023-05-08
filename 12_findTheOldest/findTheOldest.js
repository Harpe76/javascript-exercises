const findTheOldest = function(people) {

    people.forEach(person => {
        if (!person.hasOwnProperty['ageAtDeath']) {
            let currentDate = new Date().getFullYear();
            person['age'] = currentDate - person['yearOfBirth'];
        } else {
            person['age'] = person['yearAtDeath'] - person['yearAtBirth']; 
        }
    });

    let oldest = people.reduce(function(person1, person2) {
        (person1.yearOfBirth > person2.yearOfBirth) ? person1 : person2;
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
