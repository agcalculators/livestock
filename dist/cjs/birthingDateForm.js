'use strict';

require('@agc-calculators/calculators-core');
require('./chunk-e9ad9a45.js');
var birthingDate = require('./birthingDate.js');
var __chunk_2 = require('./chunk-5a6a9181.js');

var birthingDateForm = {
  id: 'birthing-date',
  name: 'Birthing Date',
  category: 'livestock',
  description: 'Calculates a birthing date from a given breeding date.',
  inputs: {
    breedingDate: {
      type: 'date',
      label: 'Breeding Date',
      validators: ['required', 'date'],
      default: () => new Date()
    },
    gestation: {
      type: 'select',
      label: 'Gestation',
      validators: ['required', 'number', 'min'],
      params: {
        min: 1
      },
      options: __chunk_2.gestationOptions,
      default: 283
    }
  },
  outputs: {
    birthingDate: {
      type: 'date',
      label: 'Birthing Date'
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
    daysTillBirthing: {
      type: 'number',
      label: 'Days until Birthing'
    },
    daysBred: {
      type: 'number',
      label: 'Days Bred'
    },
    calculated: {
      type: 'date',
      label: 'Calculated Date'
    }
  },
  calculator: birthingDate,
  messages: {
    breedingDate: {
      required: 'Breeding date is required',
      date: 'Breeding date must be a valid date'
    },
    gestation: {
      required: 'Gestation is required',
      number: 'Gestation must be a number',
      min: 'Gestation must be greater than zero.'
    }
  },
  formatters: {
    gestation: val => __chunk_2.gestationOptionLabels[val]
  },
  calendar: {
    birthingDate: ({
      birthingDate
    }) => ({
      subject: 'Birthing Date',
      from: birthingDate
    }),
    firstPartition: ({
      firstPartition
    }) => ({
      subject: 'Birthing First Partition',
      from: firstPartition
    }),
    secondPartition: ({
      secondPartition
    }) => ({
      subject: 'Birthing Second Partition',
      from: secondPartition
    }),
    thirdPartition: ({
      thirdPartition
    }) => ({
      subject: 'Birthing Third Partition',
      from: thirdPartition
    })
  }
};

module.exports = birthingDateForm;
