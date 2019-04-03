import calculateCattleReplacementsNeeded from '../calculators/cattle-replacements-needed';

export default {
    id: 'cattle-replacements-needed',
    name: 'Cattle Replacements Needed',
    description: 'Calculates the number of replacements required using a replacement rate.',
    category: 'livestock',
    inputs: {
        herdSize: { type: 'number', label: 'Herd Size', validators: ['required', 'number', 'min'], params: { min: 1} },
        replacementRate: { type: 'number', label: 'Replacement Rate', units: '%', validators: ['required', 'number', 'min'], params: { min: 0} }
    },
    outputs: {
        averageCowAge: { type: 'number', label: 'Average Female Age' },
        replacementsNeeded: { type: 'number', label: 'Replacements Needed' },
        calculated: { type: 'date', label: 'Calculated Date'}
    },
    calculator: calculateCattleReplacementsNeeded,
    messages: {
        herdSize: { required: 'Herd size is required.', number: 'Herd size must be a number', min: 'Herd size should be greater than zero.'},
        replacementRate: { required: 'Replacement rate is required.', number: 'Replacement rate must be a number', min: 'Replacement rate should be zero or greater.'}
    }
}