module.exports = function getSeason(date) {
    // function getSeason(date) {
    if (arguments.length === 0)
        return 'Unable to determine the time of year!';
    else if ((date != undefined && isNaN(date.getMonth())) || isNaN(date)) {
        throw Error
    } else {
        switch (date.getMonth()) {
            case 0:
                ;
            case 1:
                ;
            case 11:
                return 'winter';
            case 2:
                ;
            case 3:
                ;
            case 4:
                return 'spring';
            case 5:
                ;
            case 6:
                ;
            case 7:
                return 'summer';
            case 8:
                ;
            case 9:
                ;
            case 10:
                return 'autumn';

        }
    }
};