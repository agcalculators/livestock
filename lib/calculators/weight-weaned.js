
import { formatNumber, validate } from '@agc-calculators/calculators-core';
import { filterErrors, countErrors } from '../shared/index';

export default function({totalWeightWeaned, femalesExposed}) {
    let errors = {
        totalWeightWeaned: validate(totalWeightWeaned, ['required', 'number', 'min'], { min: 1}),
        femalesExposed: validate(femalesExposed, ['required', 'number', 'min'], { min: 1 })
    };

    errors.count = countErrors(errors);

    if (errors.count > 0) {
        return { errors: filterErrors(errors) };
    }

    let weightWeanedPerFemale = parseFloat(totalWeightWeaned) / parseFloat(femalesExposed);

    return {
        totalWeightWeaned: formatNumber(totalWeightWeaned, 0),
        femalesExposed: formatNumber(femalesExposed, 0),
        weightWeanedPerFemale: formatNumber(weightWeanedPerFemale, 0),
        calculated: new Date(),
        errors: { count: 0 }
    }
}