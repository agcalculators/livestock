'use strict';

var calculatorsCore = require('@agc-calculators/calculators-core');
var __chunk_1 = require('./chunk-e9ad9a45.js');

function calculateAdjustedYearlingWeight ({
  currentWeight,
  currentAge,
  adjustedWeaningWeight
}) {
  let errors = {
    currentWeight: calculatorsCore.validate(currentWeight, ['required', 'number', 'min'], {
      min: 1
    }),
    currentAge: calculatorsCore.validate(currentAge, ['required', 'number', 'min', 'max'], {
      min: 250,
      max: 450
    }),
    adjustedWeaningWeight: calculatorsCore.validate(adjustedWeaningWeight, ['required', 'number'])
  };
  errors.count = __chunk_1.countErrors(errors);

  if (errors.count > 0) {
    return {
      errors: __chunk_1.filterErrors(errors)
    };
  }
  let weightDiff = parseFloat(currentWeight) - parseFloat(adjustedWeaningWeight);
  let ageDiff = parseFloat(currentAge) - 205;
  let averageDailyGain = weightDiff / ageDiff;
  let adjustedYearlingWeight = parseFloat(averageDailyGain) * 160 + parseFloat(adjustedWeaningWeight);
  return {
    currentWeight: calculatorsCore.formatNumber(currentWeight, 0),
    currentAge: calculatorsCore.formatNumber(currentAge, 0),
    adjustedWeaningWeight: calculatorsCore.formatNumber(adjustedWeaningWeight, 0),
    averageDailyGain: calculatorsCore.formatNumber(averageDailyGain, 2),
    adjustedYearlingWeight: calculatorsCore.formatNumber(adjustedYearlingWeight, 0),
    calculated: new Date(),
    errors: {
      count: 0
    }
  };
}

module.exports = calculateAdjustedYearlingWeight;
