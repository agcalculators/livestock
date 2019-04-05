import calculateBirthingDate from '../calculators/birthing-date';
import { gestationOptions, gestationOptionLabels } from '../shared/options';

export default {
    id: 'birthing-date',
    name: 'Birthing Date',
    category: 'livestock',
    description: 'Calculates a birthing date from a given breeding date.',
    inputs: {
        breedingDate: { type: 'date', label: 'Breeding Date', validators: ['required', 'date'], default: () => new Date()},
        gestation: { type: 'select', label: 'Gestation', validators: ['required', 'number', 'min'], params: { min: 1 }, options: gestationOptions, default: 283 }
    },
    outputs: {
        birthingDate: { type: 'date', label: 'Birthing Date' },
        firstPartition: { type: 'date', label: 'First Partition' },
        secondPartition: { type: 'date', label: 'Second Partition' },
        thirdPartition: { type: 'date', label: 'Third Partition' },
        daysTillBirthing: { type: 'number', label: 'Days until Birthing' },
        daysBred: { type: 'number', label: 'Days Bred' },
        calculated: { type: 'date', label: 'Calculated Date'}
    },
    calculator: calculateBirthingDate,
    messages: {
        breedingDate: { required: 'Breeding date is required', date: 'Breeding date must be a valid date' },
        gestation: { required: 'Gestation is required', number: 'Gestation must be a number', min: 'Gestation must be greater than zero.' }
    },
    formatters: {
        gestation: (val) => gestationOptionLabels[val]
    },
    calendar: {
        birthingDate: ({birthingDate}) => ({ subject: 'Birthing Date', from: birthingDate }),
        firstPartition: ({firstPartition}) => ({subject: 'Birthing First Partition', from: firstPartition }),
        secondPartition: ({secondPartition}) => ({subject: 'Birthing Second Partition', from: secondPartition }),
        thirdPartition: ({thirdPartition}) => ({subject: 'Birthing Third Partition', from: thirdPartition }),
    },
    dashboard: {
        birthingDate: {id: 'birthing-date', title: 'Birthing Date', calculator: 'birthing-date', widget: 'date', params: { date: 'birthingDate'} },
        firstPartition: {id: 'first-partition', title: 'First Partition', calculator: 'birthing-date', widget: 'date', params: { date: 'firstPartition' } },
        secondPartition: {id: 'second-partition', title: 'Second Partition', calculator: 'birthing-date', widget: 'date', params: { date: 'secondPartition' } },
        thirdPartition: {id: 'third-partition', title: 'Third Partition', calculator: 'birthing-date', widget: 'date', params: { date: 'thirdPartition'} },
        daysTillBirthing: {id: 'days-till-birthing', title: 'Days Until Birthing', calculator: 'birthing-date', widget: 'countdown', params: { from: 'birthingDate' } },
        daysBred: { id: 'days-bred', title: 'Days Bred', calculator: 'birthing-date', widget: 'countup', params: { from: 'birthingDate' } }
    }
}