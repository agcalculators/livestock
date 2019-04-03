import { validate, addDays, daysBetween } from '@agc-calculators/calculators-core';

function calvingDate ({
  breedingDate,
  gestation = 283
}) {
  let errors = {
    breedingDate: validate(breedingDate, ['required', 'date']),
    gestation: validate(gestation, ['require', 'number', 'min'], {
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
    birthingDate: addDays(breedingDate, gestation),
    firstPartition: addDays(breedingDate, partitions[0]),
    secondPartition: addDays(breedingDate, partitions[1]),
    thirdPartition: addDays(breedingDate, partitions[2]),
    daysTillBirthing: daysBetween(new Date(), addDays(breedingDate, gestation)),
    daysBred: daysBetween(new Date(), breedingDate),
    calculated: new Date()
  };
}

export default calvingDate;
