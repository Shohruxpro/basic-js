module.exports = function createDreamTeam(members) {
    let letterArr = [];
    if (Array.isArray(members)) {
        for (let i = 0; i < members.length; i++) {
            if (typeof members[i] != 'string')
                continue;
            else {
                letterArr.push(members[i].trim()[0].toUpperCase());
            }
        }
    }
    return letterArr.sort().join('');
};