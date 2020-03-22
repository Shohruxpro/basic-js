const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (arguments.list === 0 || typeof sampleActivity != 'string') {
        return false;
    }
    sampleActivity = parseFloat(sampleActivity);
    if (sampleActivity > 15 || sampleActivity < 0 || isNaN(sampleActivity))
        return false;
    const k = 0.693 / HALF_LIFE_PERIOD;
    let age = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
    if (age == 'Infinity')
        return false;
    return age;
};
// console.log(dateSample('1.e1000'))