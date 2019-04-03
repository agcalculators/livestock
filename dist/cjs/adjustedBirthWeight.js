'use strict';

var calculatorsCore = require('@agc-calculators/calculators-core');
var __chunk_1 = require('./chunk-e9ad9a45.js');

function calculateAdjustedBirthWeight ({
  birthWeight,
  ageOfDam
}) {
  let errors = {
    birthWeight: calculatorsCore.validate(birthWeight, ['required', 'number', 'min'], {
      min: 1
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
    '2': 8,
    '3': 5,
    '4': 2,
    '5': 0,
    '11': 3
  };
  let adjustment = adjustments[`${ageOfDam}`];
  return {
    birthWeight: calculatorsCore.formatNumber(birthWeight, 0),
    ageOfDam: ageOfDam,
    adjustment: calculatorsCore.formatNumber(adjustment, 0),
    adjustedBirthWeight: calculatorsCore.formatNumber(parseFloat(birthWeight) + parseFloat(adjustment), 0),
    calculated: new Date(),
    errors: {
      count: 0
    }
  };
}

module.exports = calculateAdjustedBirthWeight;
