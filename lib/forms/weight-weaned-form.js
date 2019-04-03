import calculateWeightWeaned from '../calculators/weight-weaned';

export default {
    id: 'weight-weaned',
    name: 'Weight Weaned',
    description: 'Calculates the amount of weight weaned per female.',
    category: 'livestock',
    inputs: {
        totalWeightWeaned: { type: 'number', label: 'Total Weight Weaned', units: 'lbs', validators: ['required', 'number', 'min'], params: { min: 1} },
        femalesExposed: { type: 'number', label: 'Number of Exposed Females', validators: ['required', 'number', 'min'], params: { min: 1 } }
    },
    outputs: {
        weightWeanedPerFemale: { type: 'number', label: 'Weight Weaned per Female', units: 'lbs' },
        calculated: { type: 'date', label: 'Calculated Date'}
    },
    calculator: calculateWeightWeaned,
    messages: {
        totalWeightWeaned: { required: 'Total weight weaned is required', number: 'Total weight weaned must be a number', min: 'Total weight weaned should be greater than zero'},
        femalesExposed: { required: 'Number of exposed females is required', number: 'Number of exposed females must be a number', min: 'Number of exposed females should be greater than zero'}
    }
}