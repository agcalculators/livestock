'use strict';

var calculatorsCore = require('@agc-calculators/calculators-core');
var __chunk_1 = require('./chunk-e9ad9a45.js');

function calculateAdjustedWeaningWeight ({
  gender,
  birthWeight,
  currentWeight,
  currentAge,
  ageOfDam
}) {
  let errors = {
    gender: calculatorsCore.validate(gender, ['required', 'oneOf'], {
      oneOf: ['male', 'female']
    }),
    birthWeight: calculatorsCore.validate(birthWeight, ['required', 'number', 'min'], {
      min: 1
    }),
    currentWeight: calculatorsCore.validate(currentWeight, ['required', 'number', 'min', 'gt'], {
      min: 1,
      gt: 'birthWeight'
    }, {
      birthWeight
    }),
    currentAge: calculatorsCore.validate(currentAge, ['required', 'number', 'min', 'max'], {
      min: 150,
      max: 300
    }),
    ageOfDam: calculatorsCore.validate(ageOfDam, ['required', 'oneOf'], {
      oneOf: ['2', '3', '4', '5', '11']
    })
  };
  errors.count = __chunk_1.countErrors(errors);

  if (errors.count > 0) {
    return {
      errors: __chunk_1.filterErrors(errors)
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
    birthWeight: calculatorsCore.formatNumber(birthWeight, 0),
    currentWeight: calculatorsCore.formatNumber(currentWeight, 0),
    currentAge: calculatorsCore.formatNumber(currentAge, 0),
    ageOfDam: ageOfDam,
    adjustment: calculatorsCore.formatNumber(adjustment, 0),
    adjustedWeaningWeight: calculatorsCore.formatNumber(adjustedWeaningWeight, 0),
    averageDailyGain: calculatorsCore.formatNumber(averageDailyGain, 2),
    calculated: new Date(),
    errors: {
      count: 0
    }
  };
}

module.exports = calculateAdjustedWeaningWeight;
