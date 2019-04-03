'use strict';

var calculatorsCore = require('@agc-calculators/calculators-core');
var __chunk_1 = require('./chunk-e9ad9a45.js');

function calculateBirthingDate ({
  breedingDate,
  gestation = 283
}) {
  console.log('breeding date', breedingDate);
  let errors = {
    breedingDate: calculatorsCore.validate(breedingDate, ['required', 'date']),
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

  let inc = parseInt(Math.floor(gestation / 3));
  let partitions = [0, inc, inc * 2];
  return {
    breedingDate: breedingDate,
    gestation: gestation,
    birthingDate: calculatorsCore.addDays(breedingDate, gestation),
    firstPartition: calculatorsCore.addDays(breedingDate, partitions[0]),
    secondPartition: calculatorsCore.addDays(breedingDate, partitions[1]),
    thirdPartition: calculatorsCore.addDays(breedingDate, partitions[2]),
    daysTillBirthing: calculatorsCore.daysBetween(calculatorsCore.addDays(breedingDate, gestation), new Date()),
    daysBred: calculatorsCore.daysBetween(new Date(), breedingDate),
    calculated: new Date(),
    errors: {
      count: 0
    }
  };
}

module.exports = calculateBirthingDate;
