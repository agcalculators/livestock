
import { formatNumber, validate, isEmpty } from '@agc-calculators/calculators-core';

export default function({startWeight, endWeight, daysOnFeed}) {
    let errors = {
        startWeight: validate(startWeight, ['required', 'number', 'min'], { min: 1 }),
        endWeight: validate(startWeight, ['required', 'number', 'gt'], { gt: 'startWeight' }, { startWeight }),
        daysOnFeed: validate(daysOnFeed, ['required', 'number', 'min'], { min: 1 }),
    };

    errors.count = Object.keys(errors).reduce((cnt, current) => {
        if (!isEmpty(errors[current])) {
            cnt++;
        }
        return cnt;
    }, 0);

    if (errors.count > 0) {
        return {
            errors: errors
        };
    }

    const weightGain = parseFloat(endWeight) - parseFloat(startWeight);
    const averageDailyGain = weightGain / parseInt(daysOnFeed);

    return {
        startWeight: formatNumber(startWeight, 0),
        endWeight: formatNumber(endWeight, 0),
        daysOnFeed: formatNumber(daysOnFeed, 0),
        averageDailyGain: formatNumber(averageDailyGain, 2),
        weightGain: formatNumber(weightGain, 0),        
        calculated: new Date(),
        errors: { count: 0 }
    }
}