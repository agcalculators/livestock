
import { formatNumber, validate } from '@agc-calculators/calculators-core';
import { filterErrors, countErrors } from '../shared/index';

export default function({femalesExposed, numberBorn, numberLost}) {
    let errors = {
        femalesExposed: validate(femalesExposed, ['required', 'number', 'min'], { min: 1}),
        numberBorn: validate(numberBorn, ['required', 'number', 'min'], { min: 0 }),
        numberLost: validate(numberLost, ['required', 'nunmber', 'min'], { min: 0 })
    };

    errors.count = countErrors(errors);

    if (errors.count > 0) {
        return { errors: filterErrors(errors) };
    }

    let deathLossBorn = formatNumber(numberLost, 0) / formatNumber(numberBorn, 0);
    let deathLossExposed = formatNumber(numberLost, 0) / formatNumber(femalesExposed, 0);

    return {
        femalesExposed: formatNumber(femalesExposed, 0),
        numberBorn: formatNumber(numberBorn, 0),
        numberLost: formatNumber(numberLost, 0),
        deathLossBorn: formatNumber(deathLossBorn * 100, 1),
        deathLossExposed: formatNumber(deathLossExposed * 100, 1),
        calculated: new Date(),
        errors: { count: 0 }
    }
}