
import { formatNumber, validate } from '@agc-calculators/calculators-core';
import { filterErrors, countErrors } from '../shared/index';

export default function({numberWeaned, numberFemalesExposed, numberFemalesSoldOrDied, numberFemalesPurchased}) {
    let errors = {
        numberWeaned: validate(numberWeaned, ['required', 'number', 'min'], { min: 0}),
        numberFemalesExposed: validate(numberFemalesExposed, ['required', 'number', 'min'], { min: 0}),
        numberFemalesSoldOrDied: validate(numberFemalesSoldOrDied, ['required', 'number', 'min'], { min: 0}),
        numberFemalesPurchased: validate(numberFemalesPurchased, ['required', 'number', 'min'], { min: 0}),
    };

    errors.count = countErrors(errors);

    if (errors.count > 0) {
        return { errors: filterErrors(errors) };
    }

    let totalFemales = parseInt(numberFemalesExposed) - parseInt(numberFemalesSoldOrDied) + parseInt(numberFemalesPurchased);
    let weaningPercentage = parseInt(totalFemales) === 0 ? 0 : ( parseFloat(numberWeaned) / parseInt(totalFemales) ) * 100;

    return {
        numberWeaned: formatNumber(numberWeaned, 0),
        numberFemalesExposed: formatNumber(numberFemalesExposed, 0),
        numberFemalesSoldOrDied: formatNumber(numberFemalesSoldOrDied, 0),
        numberFemalesPurchased: formatNumber(numberFemalesPurchased, 0),
        numberFemalesExposed: formatNumber(numberFemalesExposed, 0),
        weaningPercentage: formatNumber(weaningPercentage, 1),        
        calculated: new Date(),
        errors: { count: 0 }
    }
}