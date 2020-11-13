let findTheOldest = function (people) {
    return people.reduce((oldie, person) => {
        if (!person.yearOfDeath) {
            person.yearOfDeath = 2020;
        }
        if (Object.keys(oldie).length === 0) {
            return person;
        }
        return oldie.yearOfDeath - oldie.yearOfBirth >= person.yearOfDeath - person.yearOfBirth ? oldie : person;
    }, {});
}

module.exports = findTheOldest
