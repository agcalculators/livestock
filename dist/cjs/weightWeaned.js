'use strict';

var calculatorsCore = require('@agc-calculators/calculators-core');
var __chunk_1 = require('./chunk-e9ad9a45.js');

function calculateWeightWeaned ({
  totalWeightWeaned,
  femalesExposed
}) {
  let errors = {
    totalWeightWeaned: calculatorsCore.validate(totalWeightWeaned, ['required', 'number', 'min'], {
      min: 1
    }),
    femalesExposed: calculatorsCore.validate(femalesExposed, ['required', 'number', 'min'], {
      min: 1
    })
  };
  errors.count = __chunk_1.countErrors(errors);

  if (errors.count > 0) {
    return {
      errors: __chunk_1.filterErrors(errors)
    };
  }

  let weightWeanedPerFemale = parseFloat(totalWeightWeaned) / parseFloat(femalesExposed);
  return {
    totalWeightWeaned: calculatorsCore.formatNumber(totalWeightWeaned, 0),
    femalesExposed: calculatorsCore.formatNumber(femalesExposed, 0),
    weightWeanedPerFemale: calculatorsCore.formatNumber(weightWeanedPerFemale, 0),
    calculated: new Date(),
    errors: {
      count: 0
    }
  };
}

module.exports = calculateWeightWeaned;
