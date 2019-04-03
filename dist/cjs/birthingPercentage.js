'use strict';

var calculatorsCore = require('@agc-calculators/calculators-core');
var __chunk_1 = require('./chunk-e9ad9a45.js');

function calculateBirthingPercentage ({
  numberBorn,
  numberFemalesExposed,
  numberFemalesSoldOrDied,
  numberFemalesPurchased
}) {
  let errors = {
    numberBorn: calculatorsCore.validate(numberBorn, ['required', 'number', 'min'], {
      min: 0
    }),
    numberFemalesExposed: calculatorsCore.validate(numberFemalesExposed, ['required', 'number', 'min'], {
      min: 0
    }),
    numberFemalesSoldOrDied: calculatorsCore.validate(numberFemalesSoldOrDied, ['required', 'number', 'min'], {
      min: 0
    }),
    numberFemalesPurchased: calculatorsCore.validate(numberFemalesPurchased, ['required', 'number', 'min'], {
      min: 0
    })
  };
  errors.count = __chunk_1.countErrors(errors);

  if (errors.count > 0) {
    return {
      errors: __chunk_1.filterErrors(errors)
    };
  }

  let totalFemales = parseInt(numberFemalesExposed) - parseInt(numberFemalesSoldOrDied) + parseInt(numberFemalesPurchased);
  let birthingPercentage = totalFemales == 0 ? 0 : parseFloat(numberBorn) / parseInt(totalFemales) * 100;
  return {
    numberBorn: calculatorsCore.formatNumber(numberBorn, 0),
    numberFemalesExposed: calculatorsCore.formatNumber(numberFemalesExposed, 0),
    numberFemalesSoldOrDied: calculatorsCore.formatNumber(numberFemalesSoldOrDied, 0),
    numberFemalesPurchased: calculatorsCore.formatNumber(numberFemalesPurchased, 0),
    numberFemalesExposed: calculatorsCore.formatNumber(numberFemalesExposed, 0),
    birthingPercentage: calculatorsCore.formatNumber(birthingPercentage, 1),
    calculated: new Date(),
    errors: {
      count: 0
    }
  };
}

module.exports = calculateBirthingPercentage;
