'use strict';

var calculatorsCore = require('@agc-calculators/calculators-core');
var __chunk_1 = require('./chunk-e9ad9a45.js');

const pregRates = {
  [2]: .85,
  [3]: .90,
  [4]: .95,
  [5]: .95,
  [6]: .95,
  [7]: .95,
  [8]: .95,
  [9]: .90,
  [10]: .90,
  [11]: .90
};
function calculateCattleReplacementsNeeded ({
  herdSize,
  replacementRate
}) {
  let errors = {
    herdSize: calculatorsCore.validate(herdSize, ['required', 'number', 'min'], {
      min: 1
    }),
    replacementRate: calculatorsCore.validate(replacementRate, ['required', 'number', 'min'], {
      min: 0
    })
  };
  errors.count = __chunk_1.countErrors(errors);

  if (errors.count > 0) {
    return {
      errors: __chunk_1.filterErrors(errors)
    };
  }

  let averageCowAge = 0;
  let lastSum = 0;
  let replacementRatePct = parseFloat(replacementRate) / 100;

  for (var x in pregRates) {
    if (pregRates.hasOwnProperty(x)) {
      var p = parseFloat(pregRates[x]);

      if (averageCowAge === 0) {
        lastSum = p * replacementRatePct;
        averageCowAge = lastSum * parseInt(x);
      } else {
        var tmpSum = lastSum;
        lastSum = tmpSum * p;
        averageCowAge += lastSum * parseInt(x);
      }
    }
  }

  let replacementsNeeded = Math.ceil(replacementRatePct * herdSize);
  return {
    herdSize: calculatorsCore.formatNumber(herdSize, 0),
    replacementRate: calculatorsCore.formatNumber(replacementRate, 0),
    averageCowAge: calculatorsCore.formatNumber(averageCowAge, 0),
    replacementsNeeded: calculatorsCore.formatNumber(replacementsNeeded, 0),
    calculated: new Date(),
    errors: {
      count: 0
    }
  };
}

module.exports = calculateCattleReplacementsNeeded;
