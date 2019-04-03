import { validate, formatNumber } from '@agc-calculators/calculators-core';
import { a as countErrors, b as filterErrors } from './chunk-21ca27fa.js';

function calculateWeightWeaned ({
  totalWeightWeaned,
  femalesExposed
}) {
  let errors = {
    totalWeightWeaned: validate(totalWeightWeaned, ['required', 'number', 'min'], {
      min: 1
    }),
    femalesExposed: validate(femalesExposed, ['required', 'number', 'min'], {
      min: 1
    })
  };
  errors.count = countErrors(errors);

  if (errors.count > 0) {
    return {
      errors: filterErrors(errors)
    };
  }

  let weightWeanedPerFemale = parseFloat(totalWeightWeaned) / parseFloat(femalesExposed);
  return {
    totalWeightWeaned: formatNumber(totalWeightWeaned, 0),
    femalesExposed: formatNumber(femalesExposed, 0),
    weightWeanedPerFemale: formatNumber(weightWeanedPerFemale, 0),
    calculated: new Date(),
    errors: {
      count: 0
    }
  };
}

export default calculateWeightWeaned;
