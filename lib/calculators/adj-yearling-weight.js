
import { validate, formatNumber } from '@agc-calculators/calculators-core';
import { filterErrors, countErrors } from '../shared/index';

export default function({currentWeight, currentAge, adjustedWeaningWeight}) {
    let errors = {
        currentWeight: validate(currentWeight, ['required', 'number', 'min'], { min: 1 }),
        currentAge: validate(currentAge, ['required', 'number', 'min', 'max'], { min: 250, max: 450 }),
        adjustedWeaningWeight: validate(adjustedWeaningWeight, ['required', 'number'])
    };

    errors.count = countErrors(errors);

    if (errors.count > 0) {
        return { errors: filterErrors(errors) };
    }
    
    const adjustments = {
        '2': { male: 60, female: 54 },
        '3': { male: 40, female: 36 },
        '4': { male: 20, female: 18 },        
        '5': { male: 0, female: 0 },
        '11': { male: 20, female: 18 }
    }

    let weightDiff = parseFloat(currentWeight) - parseFloat(adjustedWeaningWeight);
    let ageDiff = parseFloat(currentAge) - 205;
    let averageDailyGain = weightDiff / ageDiff;
    let adjustedYearlingWeight = (parseFloat(averageDailyGain) * 160) + parseFloat(adjustedWeaningWeight);

    return {
        currentWeight: formatNumber(currentWeight, 0),
        currentAge: formatNumber(currentAge, 0),
        adjustedWeaningWeight: formatNumber(adjustedWeaningWeight, 0),
        averageDailyGain: formatNumber(averageDailyGain, 2),
        adjustedYearlingWeight: formatNumber(adjustedYearlingWeight, 0),
        calculated: new Date(),
        errors: { count: 0 }
    }
}