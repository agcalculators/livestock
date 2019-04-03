import calculateBirthingSeason from '../calculators/birthing-season';
import { gestationOptions, gestationOptionLabels } from '../shared/options';

export default {
    id: 'birthing-season',
    name: 'Birthing Season',
    description: 'Calculates the start and end dates for a birthing season based on a sire turn-out date.',
    category: 'livestock',
    inputs: {
        sireTurnOutDate: { type: 'date', label: 'Sire Turn Out Date', validators: ['required', 'date'], default: () => new Date() },
        breedingSeasonLength: { type: 'number', label: 'Breeding Season Length', validators: ['required', 'number', 'min'], params: { min: 1} },
        gestation: { type: 'select', label: 'Gestation', validators: ['required', 'min'], params: { min: 1 }, default: 283, options: gestationOptions }
    },
    outputs: {
        birthingSeasonStart: { type: 'date', label: 'Birthing Season Start' },
        birthingSeasonEnd: { type: 'date', label: 'Birthing Season End' },
        calculated: { type: 'date', label: 'Calculated Date'}
    },
    calculator: calculateBirthingSeason,
    messages: {
        sireTurnOutDate: { required: 'Sire turn out date is required', date: 'Sire turn out date must be a valid date'},
        breedingSeasonLength: { required: 'Breeding season length is required', number: 'Breeding season length must be a number', min: 'Breeding season length must be greater than zero' },
        gestation: { required: 'Gestation is required', number: 'Gestation must be a number', min: 'Gestation must be greater than zero' }
    },
    formatters: {
        gestation: (val) => gestationOptionLabels[val] || val
    },
    calendar: {
        birthingSeason: ({birthingSeasonStart, birthingSeasonEnd}) => ({ subject: 'Birthing Season', from: birthingSeasonStart, to: birthingSeasonEnd })
    }
}