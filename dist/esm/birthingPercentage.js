import { validate, formatNumber } from '@agc-calculators/calculators-core';
import { a as countErrors, b as filterErrors } from './chunk-21ca27fa.js';

function calculateBirthingPercentage ({
  numberBorn,
  numberFemalesExposed,
  numberFemalesSoldOrDied,
  numberFemalesPurchased
}) {
  let errors = {
    numberBorn: validate(numberBorn, ['required', 'number', 'min'], {
      min: 0
    }),
    numberFemalesExposed: validate(numberFemalesExposed, ['required', 'number', 'min'], {
      min: 0
    }),
    numberFemalesSoldOrDied: validate(numberFemalesSoldOrDied, ['required', 'number', 'min'], {
      min: 0
    }),
    numberFemalesPurchased: validate(numberFemalesPurchased, ['required', 'number', 'min'], {
      min: 0
    })
  };
  errors.count = countErrors(errors);

  if (errors.count > 0) {
    return {
      errors: filterErrors(errors)
    };
  }

  let totalFemales = parseInt(numberFemalesExposed) - parseInt(numberFemalesSoldOrDied) + parseInt(numberFemalesPurchased);
  let birthingPercentage = totalFemales == 0 ? 0 : parseFloat(numberBorn) / parseInt(totalFemales) * 100;
  return {
    numberBorn: formatNumber(numberBorn, 0),
    numberFemalesExposed: formatNumber(numberFemalesExposed, 0),
    numberFemalesSoldOrDied: formatNumber(numberFemalesSoldOrDied, 0),
    numberFemalesPurchased: formatNumber(numberFemalesPurchased, 0),
    numberFemalesExposed: formatNumber(numberFemalesExposed, 0),
    birthingPercentage: formatNumber(birthingPercentage, 1),
    calculated: new Date(),
    errors: {
      count: 0
    }
  };
}

export default calculateBirthingPercentage;
