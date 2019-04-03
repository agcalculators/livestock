'use strict';

var calculatorsCore = require('@agc-calculators/calculators-core');
var __chunk_1 = require('./chunk-e9ad9a45.js');

function calculateDeathLoss ({
  femalesExposed,
  numberBorn,
  numberLost
}) {
  let errors = {
    femalesExposed: calculatorsCore.validate(femalesExposed, ['required', 'number', 'min'], {
      min: 1
    }),
    numberBorn: calculatorsCore.validate(numberBorn, ['required', 'number', 'min'], {
      min: 0
    }),
    numberLost: calculatorsCore.validate(numberLost, ['required', 'nunmber', 'min'], {
      min: 0
    })
  };
  errors.count = __chunk_1.countErrors(errors);

  if (errors.count > 0) {
    return {
      errors: __chunk_1.filterErrors(errors)
    };
  }

  let deathLossBorn = calculatorsCore.formatNumber(numberLost, 0) / calculatorsCore.formatNumber(numberBorn, 0);
  let deathLossExposed = calculatorsCore.formatNumber(numberLost, 0) / calculatorsCore.formatNumber(femalesExposed, 0);
  return {
    femalesExposed: calculatorsCore.formatNumber(femalesExposed, 0),
    numberBorn: calculatorsCore.formatNumber(numberBorn, 0),
    numberLost: calculatorsCore.formatNumber(numberLost, 0),
    deathLossBorn: calculatorsCore.formatNumber(deathLossBorn * 100, 1),
    deathLossExposed: calculatorsCore.formatNumber(deathLossExposed * 100, 1),
    calculated: new Date(),
    errors: {
      count: 0
    }
  };
}

module.exports = calculateDeathLoss;
