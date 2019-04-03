'use strict';

var calculatorsCore = require('@agc-calculators/calculators-core');
var __chunk_1 = require('./chunk-e9ad9a45.js');

function calculateWeightGain ({
  headCount,
  totalFeedIntake,
  feedConversionRate,
  startWeight
}) {
  let errors = {
    headCount: calculatorsCore.validate(headCount, ['required', 'min'], {
      min: 1
    }),
    totalFeedIntake: calculatorsCore.validate(totalFeedIntake, ['required', 'number', 'min'], {
      min: 1
    }),
    feedConversionRate: calculatorsCore.validate(feedConversionRate, ['required', 'number', 'min'], {
      min: 1
    }),
    startWeight: calculatorsCore.validate(startWeight, ['required', 'min'], {
      min: 1
    })
  };
  errors.count = __chunk_1.countErrors(errors);

  if (errors.count > 0) {
    return {
      errors: __chunk_1.filterErrors(errors)
    };
  }

  let weightGainPerHead = calculatorsCore.formatNumber(parseFloat(totalFeedIntake) / parseInt(headCount) / parseFloat(feedConversionRate), 0);
  let endWeight = calculatorsCore.formatNumber(parseFloat(startWeight) + weightGainPerHead, 0);
  let totalWeightGain = calculatorsCore.formatNumber(weightGainPerHead * parseInt(headCount), 0);
  return {
    headCount: calculatorsCore.formatNumber(startWeight, 0),
    totalFeedIntake: calculatorsCore.formatNumber(endWeight, 0),
    feedConversionRate: calculatorsCore.formatNumber(feedConversionRate, 1),
    startWeight: calculatorsCore.formatNumber(startWeight, 0),
    weightGainPerHead: weightGainPerHead,
    endWeight: endWeight,
    totalWeightGain: totalWeightGain,
    calculated: new Date(),
    errors: {
      count: 0
    }
  };
}

module.exports = calculateWeightGain;
