'use strict';

var calculatorsCore = require('@agc-calculators/calculators-core');
var __chunk_1 = require('./chunk-e9ad9a45.js');

function calculateBreedingDate ({
  birthingDate,
  gestation = 283
}) {
  let errors = {
    birthingDate: calculatorsCore.validate(birthingDate, ['required', 'date']),
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
  const breedingDate = calculatorsCore.addDays(birthingDate, -parseInt(gestation));
  return {
    birthingDate: birthingDate,
    gestation: gestation,
    breedingDate: breedingDate,
    firstPartition: calculatorsCore.addDays(birthingDate, partitions[0]),
    secondPartition: calculatorsCore.addDays(birthingDate, partitions[1]),
    thirdPartition: calculatorsCore.addDays(birthingDate, partitions[2]),
    daysTillBreeding: calculatorsCore.daysBetween(breedingDate, new Date()),
    calculated: new Date(),
    errors: {
      count: 0
    }
  };
}

module.exports = calculateBreedingDate;
