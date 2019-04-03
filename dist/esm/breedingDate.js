import { validate, addDays, daysBetween } from '@agc-calculators/calculators-core';
import { a as countErrors, b as filterErrors } from './chunk-21ca27fa.js';

function calculateBreedingDate ({
  birthingDate,
  gestation = 283
}) {
  let errors = {
    birthingDate: validate(birthingDate, ['required', 'date']),
    gestation: validate(gestation, ['required', 'number', 'min'], {
      min: 1
    })
  };
  errors.count = countErrors(errors);

  if (errors.count > 0) {
    return {
      errors: filterErrors(errors)
    };
  }

  let inc = parseInt(Math.floor(gestation / 3));
  let partitions = [0, inc, inc * 2];
  const breedingDate = addDays(birthingDate, -parseInt(gestation));
  return {
    birthingDate: birthingDate,
    gestation: gestation,
    breedingDate: breedingDate,
    firstPartition: addDays(birthingDate, partitions[0]),
    secondPartition: addDays(birthingDate, partitions[1]),
    thirdPartition: addDays(birthingDate, partitions[2]),
    daysTillBreeding: daysBetween(breedingDate, new Date()),
    calculated: new Date(),
    errors: {
      count: 0
    }
  };
}

export default calculateBreedingDate;
