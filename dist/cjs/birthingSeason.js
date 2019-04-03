'use strict';

var calculatorsCore = require('@agc-calculators/calculators-core');
var __chunk_1 = require('./chunk-e9ad9a45.js');

function calculateBirthingSeason ({
  breedingSeasonLength,
  sireTurnOutDate,
  gestation = 283
}) {
  let errors = {
    breedingSeasonLength: calculatorsCore.validate(breedingSeasonLength, ['required', 'number', 'min'], {
      min: 1
    }),
    sireTurnOutDate: calculatorsCore.validate(sireTurnOutDate, ['required', 'date']),
    gestation: calculatorsCore.validate(gestation, ['required', 'number', 'min'], {
      min: 1
    })
  };
  errors.count = __chunk_1.countErrors(errors);

  if (errors.count > 0) {
    return {
      errors: __chunk_1.filterErrors(errors)
    };
  }

  let birthingSeasonStart = calculatorsCore.addDays(calculatorsCore.parseDate(sireTurnOutDate), parseInt(gestation));
  let birthingSeasonEnd = calculatorsCore.addDays(birthingSeasonStart, parseInt(breedingSeasonLength));
  return {
    breedingSeasonLength: calculatorsCore.formatNumber(breedingSeasonLength, 0),
    sireTurnOutDate: calculatorsCore.parseDate(sireTurnOutDate),
    gestation: calculatorsCore.formatNumber(gestation),
    birthingSeasonStart: birthingSeasonStart,
    birthingSeasonEnd: birthingSeasonEnd,
    calculated: new Date(),
    errors: {
      count: 0
    }
  };
}

module.exports = calculateBirthingSeason;
