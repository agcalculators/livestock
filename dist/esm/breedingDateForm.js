import '@agc-calculators/calculators-core';
import './chunk-21ca27fa.js';
import calculateBreedingDate from './breedingDate.js';

var breedingDateForm = {
  id: 'breeding-date',
  name: 'Breeding Date',
  description: 'Calculates a breeding date from a given birthing date.',
  category: 'livestock',
  inputs: {
    birthingDate: {
      type: 'date',
      label: 'Birthing Date',
      validators: ['required', 'date'],
      default: () => new Date()
    },
    gestation: {
      type: 'select',
      label: 'Gestation',
      validators: ['required'],
      default: 283,
      options: [{
        text: 'Chicken - 21 Days',
        value: 21
      }, {
        text: 'Cow - 283 Days',
        value: 283
      }, {
        text: 'Ewe - 147 Days',
        value: 147
      }, {
        text: 'Goat - 150 Days',
        value: 150
      }, {
        text: 'Heifer - 279 Days',
        value: 279
      }, {
        text: 'Mare - 342 Days',
        value: 342
      }, {
        text: 'Sow - 114 Days',
        value: 114
      }]
    }
  },
  outputs: {
    breedingDate: {
      type: 'date',
      label: 'Breeding Date'
    },
    firstPartition: {
      type: 'date',
      label: 'First Partition'
    },
    secondPartition: {
      type: 'date',
      label: 'Second Partition'
    },
    thirdPartition: {
      type: 'date',
      label: 'Third Partition'
    },
    daysTillBreeding: {
      type: 'number',
      label: 'Days until Breeding'
    },
    calculated: {
      type: 'date',
      label: 'Calculated Date'
    }
  },
  calculator: calculateBreedingDate,
  messages: {
    birthingDate: {
      required: 'Birthing date is required',
      date: 'Birthing date must be a valid date'
    },
    gestation: {
      required: 'Gestation is required.',
      min: 'Gestation must be greater than zero.'
    }
  },
  calendar: {
    breedingDate: ({
      breedingDate
    }) => ({
      subject: 'Breeding Date',
      from: breedingDate
    })
  }
};

export default breedingDateForm;
