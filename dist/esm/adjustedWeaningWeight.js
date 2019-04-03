import { validate, formatNumber } from '@agc-calculators/calculators-core';
import { a as countErrors, b as filterErrors } from './chunk-21ca27fa.js';

function calculateAdjustedWeaningWeight ({
  gender,
  birthWeight,
  currentWeight,
  currentAge,
  ageOfDam
}) {
  let errors = {
    gender: validate(gender, ['required', 'oneOf'], {
      oneOf: ['male', 'female']
    }),
    birthWeight: validate(birthWeight, ['required', 'number', 'min'], {
      min: 1
    }),
    currentWeight: validate(currentWeight, ['required', 'number', 'min', 'gt'], {
      min: 1,
      gt: 'birthWeight'
    }, {
      birthWeight
    }),
    currentAge: validate(currentAge, ['required', 'number', 'min', 'max'], {
      min: 150,
      max: 300
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
    '2': {
      male: 60,
      female: 54
    },
    '3': {
      male: 40,
      female: 36
    },
    '4': {
      male: 20,
      female: 18
    },
    '5': {
      male: 0,
      female: 0
    },
    '11': {
      male: 20,
      female: 18
    }
  };
  let adjustment = parseFloat(adjustments[`${ageOfDam}`][gender]);
  let weightGain = parseFloat(currentWeight) - parseFloat(birthWeight);
  let averageDailyGain = parseFloat(weightGain / parseInt(currentAge));
  let adjustedWeaningWeight = parseFloat(birthWeight) + adjustment + averageDailyGain * 205;
  return {
    gender: gender,
    birthWeight: formatNumber(birthWeight, 0),
    currentWeight: formatNumber(currentWeight, 0),
    currentAge: formatNumber(currentAge, 0),
    ageOfDam: ageOfDam,
    adjustment: formatNumber(adjustment, 0),
    adjustedWeaningWeight: formatNumber(adjustedWeaningWeight, 0),
    averageDailyGain: formatNumber(averageDailyGain, 2),
    calculated: new Date(),
    errors: {
      count: 0
    }
  };
}

export default calculateAdjustedWeaningWeight;
