'use strict';

var calculatorsCore = require('@agc-calculators/calculators-core');
var __chunk_1 = require('./chunk-e9ad9a45.js');

function calculateDaysOnFeed ({
  startDate,
  startWeight,
  endWeight,
  averageDailyGain
}) {
  let errors = {
    startDate: calculatorsCore.validate(startDate, ['required', 'date']),
    startWeight: calculatorsCore.validate(startWeight, ['required', 'number', 'min'], {
      min: 1
    }),
    endWeight: calculatorsCore.validate(endWeight, ['required', 'number', 'min', 'gt'], {
      min: 1,
      gt: 'startWeight'
    }, {
      startWeight
    }),
    averageDailyGain: calculatorsCore.validate(averageDailyGain, ['required', 'number', 'min'], {
      min: 0
    })
  };
  errors.count = __chunk_1.countErrors(errors);

  if (errors.count > 0) {
    return {
      errors: __chunk_1.filterErrors(errors)
    };
  }

  const weightGain = parseFloat(endWeight) - parseFloat(startWeight);
  const daysOnFeed = parseInt(Math.floor(weightGain / parseFloat(averageDailyGain)));
  return {
    startDate: calculatorsCore.parseDate(startDate),
    startWeight: calculatorsCore.formatNumber(startWeight, 0),
    endWeight: calculatorsCore.formatNumber(endWeight, 0),
    averageDailyGain: calculatorsCore.formatNumber(averageDailyGain, 2),
    weightGain: calculatorsCore.formatNumber(weightGain, 0),
    daysOnFeed: daysOnFeed,
    endDate: calculatorsCore.addDays(startDate, daysOnFeed),
    calculated: new Date(),
    errors: {
      count: 0
    }
  };
}

module.exports = calculateDaysOnFeed;
