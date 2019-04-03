
import { formatNumber, parseDate, validate, addDays } from '@agc-calculators/calculators-core';
import { filterErrors, countErrors } from '../shared/index';

export default function({startDate, startWeight, endWeight, averageDailyGain}) {
    let errors = {
        startDate: validate(startDate, ['required', 'date']),
        startWeight: validate(startWeight, ['required', 'number', 'min' ], { min: 1 }),
        endWeight: validate(endWeight, ['required', 'number', 'min', 'gt'], { min: 1, gt: 'startWeight'}, { startWeight }),
        averageDailyGain: validate(averageDailyGain, ['required', 'number', 'min'], { min: 0 }),
    };

    errors.count = countErrors(errors);

    if (errors.count > 0) {
        return { errors: filterErrors(errors) };
    }

    const weightGain = parseFloat(endWeight) - parseFloat(startWeight);
    const daysOnFeed = parseInt(Math.floor(weightGain / parseFloat(averageDailyGain)));

    return {
        startDate: parseDate(startDate),
        startWeight: formatNumber(startWeight, 0),
        endWeight: formatNumber(endWeight, 0),
        averageDailyGain: formatNumber(averageDailyGain, 2),
        weightGain: formatNumber(weightGain, 0),
        daysOnFeed: daysOnFeed,
        endDate: addDays(startDate, daysOnFeed),
        calculated: new Date(),
        errors: { count: 0 }
    }
}