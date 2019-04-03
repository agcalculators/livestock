'use strict';

var calculatorsCore = require('@agc-calculators/calculators-core');

function calvingDate ({
  breedingDate,
  gestation = 283
}) {
  let errors = {
    breedingDate: calculatorsCore.validate(breedingDate, ['required', 'date']),
    gestation: calculatorsCore.validate(gestation, ['require', 'number', 'min'], {
      min: 1
    })
  };

  if (Object.keys(errors.breedingDate).length || Object.keys(errors.gestation).length) {
    return {
      errors: errors,
      breedingDate: breedingDate,
      gestation: gestation
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
    daysTillBirthing: calculatorsCore.daysBetween(new Date(), calculatorsCore.addDays(breedingDate, gestation)),
    daysBred: calculatorsCore.daysBetween(new Date(), breedingDate),
    calculated: new Date()
  };
}

module.exports = calvingDate;
