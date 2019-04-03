import calculateWeaningPercentage from '../calculators/weaning-percentage';

export default {
    id: 'weaning-percentage',
    name: 'Weaning Percentage',
    description: 'Calculates a weaning percentage.',
    category: 'livestock',
    inputs: {
        numberWeaned: { type: 'number', label: 'Number of Offspring Weaned', validators: ['required', 'number', 'min'], params: { min: 0} },
        numberFemalesExposed: { type: 'number', label: 'Number of Females Exposed', validators: ['required', 'number', 'min'], params: { min: 0} },
        numberFemalesSoldOrDied: { type: 'number', label: 'Number of Females Sold or Died', validators: ['required', 'number', 'min'], params: { min: 0} },
        numberFemalesPurchased: { type: 'number', label: 'Number of Females Purchased', validators: ['required', 'number', 'min'], params: { min: 0} }
    },
    outputs: {
        weaningPercentage: { type: 'number', label: 'Weaning Percentage', units: '%' },
        calculated: { type: 'date', label: 'Calculated Date'}
    },
    calculator: calculateWeaningPercentage,
    messages: {
        numberWeaned: { required: 'Number of offspring weaned is required', number: 'Number of offspring weaned must be a number', min: 'Number of offspring weaned should be zero or greater'},
        numberFemalesExposed: { required: 'Number of females exposed is required', number: 'Number of females exposed must be a number', min: 'Number of females exposed should be zero or greater'},
        numberFemalesSoldOrDied: { required: 'Number of females sold or died is required', number: 'Number of females sold or died must be a number', min: 'Number of females sold or died should be zero or greater'},
        numberFemalesPurchased: { required: 'Number of females purchased is required', number: 'Number of females purchased must be a number', min: 'Number of females purchased should be zero or greater'},
    }
}