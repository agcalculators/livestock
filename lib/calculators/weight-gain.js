
import { formatNumber, validate } from '@agc-calculators/calculators-core';
import { filterErrors, countErrors } from '../shared/index';

export default function({headCount, totalFeedIntake, feedConversionRate, startWeight}) {
    let errors = {
        headCount: validate(headCount, ['required', 'min'], { min: 1}),
        totalFeedIntake: validate(totalFeedIntake, ['required', 'number', 'min'], { min: 1 }),
        feedConversionRate: validate(feedConversionRate, ['required', 'number', 'min'], { min: 1 }),
        startWeight: validate(startWeight, ['required', 'min'], { min: 1})
    };

    errors.count = countErrors(errors);

    if (errors.count > 0) {
        return { errors: filterErrors(errors) };
    }

    let weightGainPerHead = formatNumber((parseFloat(totalFeedIntake) / parseInt(headCount)) / parseFloat(feedConversionRate), 0);
    let endWeight = formatNumber(parseFloat(startWeight) + weightGainPerHead, 0);
    let totalWeightGain = formatNumber(weightGainPerHead * parseInt(headCount), 0);

    return {
        headCount: formatNumber(startWeight, 0),
        totalFeedIntake: formatNumber(endWeight, 0),
        feedConversionRate: formatNumber(feedConversionRate, 1),
        startWeight: formatNumber(startWeight, 0),
        weightGainPerHead: weightGainPerHead,
        endWeight: endWeight,
        totalWeightGain: totalWeightGain,
        calculated: new Date(),
        errors: { count: 0 }
    }
}