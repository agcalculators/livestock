'use strict';

var calculatorsCore = require('@agc-calculators/calculators-core');

function calculateAverageDailyGain ({
  startWeight,
  endWeight,
  daysOnFeed
}) {
  let errors = {
    startWeight: calculatorsCore.validate(startWeight, ['required', 'number', 'min'], {
      min: 1
    }),
    endWeight: calculatorsCore.validate(startWeight, ['required', 'number', 'gt'], {
      gt: 'startWeight'
    }, {
      startWeight
    }),
    daysOnFeed: calculatorsCore.validate(daysOnFeed, ['required', 'number', 'min'], {
      min: 1
    })
  };
  errors.count = Object.keys(errors).reduce((cnt, current) => {
    if (!calculatorsCore.isEmpty(errors[current])) {
      cnt++;
    }

    return cnt;
  }, 0);

  if (errors.count > 0) {
    return {
      errors: errors
    };
  }

  const weightGain = parseFloat(endWeight) - parseFloat(startWeight);
  const averageDailyGain = weightGain / parseInt(daysOnFeed);
  return {
    startWeight: calculatorsCore.formatNumber(startWeight, 0),
    endWeight: calculatorsCore.formatNumber(endWeight, 0),
    daysOnFeed: calculatorsCore.formatNumber(daysOnFeed, 0),
    averageDailyGain: calculatorsCore.formatNumber(averageDailyGain, 2),
    weightGain: calculatorsCore.formatNumber(weightGain, 0),
    calculated: new Date(),
    errors: {
      count: 0
    }
  };
}

module.exports = calculateAverageDailyGain;
