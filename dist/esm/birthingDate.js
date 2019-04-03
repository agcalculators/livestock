import { validate, addDays, daysBetween } from '@agc-calculators/calculators-core';
import { a as countErrors, b as filterErrors } from './chunk-21ca27fa.js';

function calculateBirthingDate ({
  breedingDate,
  gestation = 283
}) {
  console.log('breeding date', breedingDate);
  let errors = {
    breedingDate: validate(breedingDate, ['required', 'date']),
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
  return {
    breedingDate: breedingDate,
    gestation: gestation,
    birthingDate: addDays(breedingDate, gestation),
    firstPartition: addDays(breedingDate, partitions[0]),
    secondPartition: addDays(breedingDate, partitions[1]),
    thirdPartition: addDays(breedingDate, partitions[2]),
    daysTillBirthing: daysBetween(addDays(breedingDate, gestation), new Date()),
    daysBred: daysBetween(new Date(), breedingDate),
    calculated: new Date(),
    errors: {
      count: 0
    }
  };
}

export default calculateBirthingDate;
