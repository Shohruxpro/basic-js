module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let obj = {};
    let turns = Math.pow(2, disksNumber) - 1;
    turnsSpeed = turnsSpeed / 3600;
    let seconds = turns / turnsSpeed;
    obj.turns = turns;
    obj.seconds = seconds;
    return obj;
}