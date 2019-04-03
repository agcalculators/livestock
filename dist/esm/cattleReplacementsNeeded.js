import { validate, formatNumber } from '@agc-calculators/calculators-core';
import { a as countErrors, b as filterErrors } from './chunk-21ca27fa.js';

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
    herdSize: validate(herdSize, ['required', 'number', 'min'], {
      min: 1
    }),
    replacementRate: validate(replacementRate, ['required', 'number', 'min'], {
      min: 0
    })
  };
  errors.count = countErrors(errors);

  if (errors.count > 0) {
    return {
      errors: filterErrors(errors)
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
    herdSize: formatNumber(herdSize, 0),
    replacementRate: formatNumber(replacementRate, 0),
    averageCowAge: formatNumber(averageCowAge, 0),
    replacementsNeeded: formatNumber(replacementsNeeded, 0),
    calculated: new Date(),
    errors: {
      count: 0
    }
  };
}

export default calculateCattleReplacementsNeeded;
