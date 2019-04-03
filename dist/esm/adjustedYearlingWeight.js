import { validate, formatNumber } from '@agc-calculators/calculators-core';
import { a as countErrors, b as filterErrors } from './chunk-21ca27fa.js';

function calculateAdjustedYearlingWeight ({
  currentWeight,
  currentAge,
  adjustedWeaningWeight
}) {
  let errors = {
    currentWeight: validate(currentWeight, ['required', 'number', 'min'], {
      min: 1
    }),
    currentAge: validate(currentAge, ['required', 'number', 'min', 'max'], {
      min: 250,
      max: 450
    }),
    adjustedWeaningWeight: validate(adjustedWeaningWeight, ['required', 'number'])
  };
  errors.count = countErrors(errors);

  if (errors.count > 0) {
    return {
      errors: filterErrors(errors)
    };
  }
  let weightDiff = parseFloat(currentWeight) - parseFloat(adjustedWeaningWeight);
  let ageDiff = parseFloat(currentAge) - 205;
  let averageDailyGain = weightDiff / ageDiff;
  let adjustedYearlingWeight = parseFloat(averageDailyGain) * 160 + parseFloat(adjustedWeaningWeight);
  return {
    currentWeight: formatNumber(currentWeight, 0),
    currentAge: formatNumber(currentAge, 0),
    adjustedWeaningWeight: formatNumber(adjustedWeaningWeight, 0),
    averageDailyGain: formatNumber(averageDailyGain, 2),
    adjustedYearlingWeight: formatNumber(adjustedYearlingWeight, 0),
    calculated: new Date(),
    errors: {
      count: 0
    }
  };
}

export default calculateAdjustedYearlingWeight;
