import calculateAdjustedBirthWeight from '../calculators/adj-birth-weight';
import { damAgeOptions, damAgeOptionLabels } from '../shared/options';

export default {
    id: 'adj-birth-weight',
    name: 'Adjusted Birth Weight',
    description: 'Calculates an adjusted birth weight based on the age of the dam.',
    inputs: {
        birthWeight: { type: 'number', label: 'Birth Weight', units: 'lbs', validators: ['required', 'number', 'min'], params: { min: 1}},
        ageOfDam: { type: 'select', label: 'Dam', validators: ['required', 'oneOf'], params: { 'oneOf': ['2', '3', '4', '5', '11'] }, default: '3', options: damAgeOptions }
    },
    outputs: {
        adjustedBirthWeight: { type: 'number', label: 'Adjusted Birth Weight', units: 'lbs' },
        adjustment: { type: 'number', label: 'Adjustment', units: 'lbs' },        
        calculated: { type: 'date', label: 'Calculated Date'}
    },
    calculator: calculateAdjustedBirthWeight,
    messages: {
        birthWeight: {required: 'Birth weight is required.', number: 'Birth weight must be a number.', min: 'Birth weight must be greater than zero.' },
        ageOfDam: { required: 'Dam age is required.', oneOf: 'Valid dam age options are 2, 3, 4, 5 (5 -10), or 11 (11+).' }
    },
    formatters: {
        ageOfDam: (val) => damAgeOptionLabels[val] || val
    },
    calendar: {
        adjustedBirthWeight: ({calculated, adjustment, adjustedBirthWeight, units = 'lbs'}) => ({ subject: 'Adjusted Birth Weight', details: `${adjustedBirthWeight} ${units} ${adjustment > 0 ? `(+${adjustment} ${units})` : ''}`, from: calculated })
    },
    dashboard: {
        adjustedBirthWeight: { 
            id: 'adjusted-birth-weight',             
            calculator: 'adj-birth-weight', 
            widget: 'measure', 
            params: { 
                title: 'Adjusted Birth Weight',
                measure: ({adjustedBirthWeight, units = 'lbs'}) => `${adjustedBirthWeight} ${units}`, 
                units: 'lbs',
                source: 'calculator',
                details: ({adjustment, ageOfDam, formatters, units = 'lbs'}) => 
                    (`Adjusted ${adjustment} ${units} (${formatters['ageOfDam'](ageOfDam)})`)
            }
        },
        adjustment: { 
            id: 'adjusted-birth-weight-adjustement',             
            calculator: 'adj-birth-weight', 
            widget: 'measure', 
            params: { 
                title: 'Adjusted Birth Weight Adjustment',
                measure: ({adjustment, units = 'lbs'}) => `${adjustment} ${units}`, 
                units: 'lbs',
                source: 'calculator',
                details: ({ageOfDam, formatters}) => 
                    (`Based on a ${formatters['ageOfDam'](ageOfDam).replace('Years', 'Year')} dam.`)
            }
        }
    }
}