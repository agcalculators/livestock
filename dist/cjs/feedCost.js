'use strict';

var calculatorsCore = require('@agc-calculators/calculators-core');
var __chunk_1 = require('./chunk-e9ad9a45.js');

function calculateFeedCost ({
  startWeight,
  endWeight,
  daysOnFeed,
  totalFeedCost
}) {
  let errors = {
    daysOnFeed: calculatorsCore.validate(daysOnFeed, ['required', 'number', 'min'], {
      min: 1
    }),
    totalFeedCost: calculatorsCore.validate(totalFeedCost, ['required', 'number', 'min'], {
      min: 0
    }),
    startWeight: calculatorsCore.validate(startWeight, ['required', 'number', 'min'], {
      min: 1
    }),
    endWeight: calculatorsCore.validate(endWeight, ['required', 'number', 'gt'], {
      gt: 'startWeight'
    }, {
      startWeight
    })
  };
  errors.count = __chunk_1.countErrors(errors);

  if (errors.count > 0) {
    return {
      errors: __chunk_1.filterErrors(errors)
    };
  }

  let totalWeightGain = parseInt(endWeight) - parseInt(startWeight);
  let averageDailyGain = calculatorsCore.formatNumber(totalWeightGain / parseInt(daysOnFeed), 2);
  let feedCostPerWeight = parseFloat(totalFeedCost) / parseFloat(totalWeightGain);
  let feedCostPerDay = parseFloat(averageDailyGain) * parseFloat(feedCostPerWeight);
  return {
    daysOnFeed: calculatorsCore.formatNumber(daysOnFeed, 0),
    totalFeedCost: calculatorsCore.formatNumber(totalFeedCost, 2),
    startWeight: calculatorsCore.formatNumber(startWeight, 0),
    endWeight: calculatorsCore.formatNumber(endWeight, 0),
    totalWeightGain: calculatorsCore.formatNumber(totalWeightGain, 0),
    averageDailyGain: calculatorsCore.formatNumber(averageDailyGain, 2),
    feedCostPerWeight: calculatorsCore.formatNumber(feedCostPerWeight, 2),
    feedCostPerDay: calculatorsCore.formatNumber(feedCostPerDay, 2),
    calculated: new Date(),
    errors: {
      count: 0
    }
  };
}

module.exports = calculateFeedCost;
