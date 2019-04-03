import { validate, formatNumber } from '@agc-calculators/calculators-core';
import { a as countErrors, b as filterErrors } from './chunk-21ca27fa.js';

function calculateAdjustedBirthWeight ({
  birthWeight,
  ageOfDam
}) {
  let errors = {
    birthWeight: validate(birthWeight, ['required', 'number', 'min'], {
      min: 1
    }),
    ageOfDam: validate(ageOfDam, ['required', 'oneOf'], {
      oneOf: ['2', '3', '4', '5', '11']
    })
  };
  errors.count = countErrors(errors);

  if (errors.count > 0) {
    return {
      errors: filterErrors(errors)
    };
  }

  const adjustments = {
    '2': 8,
    '3': 5,
    '4': 2,
    '5': 0,
    '11': 3
  };
  let adjustment = adjustments[`${ageOfDam}`];
  return {
    birthWeight: formatNumber(birthWeight, 0),
    ageOfDam: ageOfDam,
    adjustment: formatNumber(adjustment, 0),
    adjustedBirthWeight: formatNumber(parseFloat(birthWeight) + parseFloat(adjustment), 0),
    calculated: new Date(),
    errors: {
      count: 0
    }
  };
}

export default calculateAdjustedBirthWeight;
