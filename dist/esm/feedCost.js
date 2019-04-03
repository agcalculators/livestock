import { validate, formatNumber } from '@agc-calculators/calculators-core';
import { a as countErrors, b as filterErrors } from './chunk-21ca27fa.js';

function calculateFeedCost ({
  startWeight,
  endWeight,
  daysOnFeed,
  totalFeedCost
}) {
  let errors = {
    daysOnFeed: validate(daysOnFeed, ['required', 'number', 'min'], {
      min: 1
    }),
    totalFeedCost: validate(totalFeedCost, ['required', 'number', 'min'], {
      min: 0
    }),
    startWeight: validate(startWeight, ['required', 'number', 'min'], {
      min: 1
    }),
    endWeight: validate(endWeight, ['required', 'number', 'gt'], {
      gt: 'startWeight'
    }, {
      startWeight
    })
  };
  errors.count = countErrors(errors);

  if (errors.count > 0) {
    return {
      errors: filterErrors(errors)
    };
  }

  let totalWeightGain = parseInt(endWeight) - parseInt(startWeight);
  let averageDailyGain = formatNumber(totalWeightGain / parseInt(daysOnFeed), 2);
  let feedCostPerWeight = parseFloat(totalFeedCost) / parseFloat(totalWeightGain);
  let feedCostPerDay = parseFloat(averageDailyGain) * parseFloat(feedCostPerWeight);
  return {
    daysOnFeed: formatNumber(daysOnFeed, 0),
    totalFeedCost: formatNumber(totalFeedCost, 2),
    startWeight: formatNumber(startWeight, 0),
    endWeight: formatNumber(endWeight, 0),
    totalWeightGain: formatNumber(totalWeightGain, 0),
    averageDailyGain: formatNumber(averageDailyGain, 2),
    feedCostPerWeight: formatNumber(feedCostPerWeight, 2),
    feedCostPerDay: formatNumber(feedCostPerDay, 2),
    calculated: new Date(),
    errors: {
      count: 0
    }
  };
}

export default calculateFeedCost;
