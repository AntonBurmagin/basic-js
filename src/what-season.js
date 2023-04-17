const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
let season = ['winter', 'spring', 'spring', 'summer', 'summer', 'autumn', 'autumn', 'winter'];
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  let m = new Date(date);
  if (!Date.parse(date) || date.hasOwnProperty('toString') ) {
    throw new Error("Invalid date!");
  }
  return season[Math.floor(m.getMonth()*2/3)];
}

module.exports = {
  getSeason
};
