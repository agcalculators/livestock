import { validate, addDays, parseDate, formatNumber } from '@agc-calculators/calculators-core';
import { a as countErrors, b as filterErrors } from './chunk-21ca27fa.js';

function calculateBirthingSeason ({
  breedingSeasonLength,
  sireTurnOutDate,
  gestation = 283
}) {
  let errors = {
    breedingSeasonLength: validate(breedingSeasonLength, ['required', 'number', 'min'], {
      min: 1
    }),
    sireTurnOutDate: validate(sireTurnOutDate, ['required', 'date']),
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

  let birthingSeasonStart = addDays(parseDate(sireTurnOutDate), parseInt(gestation));
  let birthingSeasonEnd = addDays(birthingSeasonStart, parseInt(breedingSeasonLength));
  return {
    breedingSeasonLength: formatNumber(breedingSeasonLength, 0),
    sireTurnOutDate: parseDate(sireTurnOutDate),
    gestation: formatNumber(gestation),
    birthingSeasonStart: birthingSeasonStart,
    birthingSeasonEnd: birthingSeasonEnd,
    calculated: new Date(),
    errors: {
      count: 0
    }
  };
}

export default calculateBirthingSeason;
