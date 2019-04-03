'use strict';

require('@agc-calculators/calculators-core');
require('./chunk-e9ad9a45.js');
var adjustedBirthWeight = require('./adjustedBirthWeight.js');
var __chunk_2 = require('./chunk-5a6a9181.js');

var adjustedBirthWeightForm = {
  id: 'adj-birth-weight',
  name: 'Adjusted Birth Weight',
  description: 'Calculates an adjusted birth weight based on the age of the dam.',
  inputs: {
    birthWeight: {
      type: 'number',
      label: 'Birth Weight',
      units: 'lbs',
      validators: ['required', 'number', 'min'],
      params: {
        min: 1
      }
    },
    ageOfDam: {
      type: 'select',
      label: 'Dam',
      validators: ['required', 'oneOf'],
      params: {
        'oneOf': ['2', '3', '4', '5', '11']
      },
      default: '3',
      options: __chunk_2.damAgeOptions
    }
  },
  outputs: {
    adjustment: {
      type: 'number',
      label: 'Adjustment',
      units: 'lbs'
    },
    adjustedBirthWeight: {
      type: 'number',
      label: 'Adjusted Birth Weight',
      units: 'lbs'
    },
    calculated: {
      type: 'date',
      label: 'Calculated Date'
    }
  },
  calculator: adjustedBirthWeight,
  messages: {
    birthWeight: {
      required: 'Birth weight is required.',
      number: 'Birth weight must be a number.',
      min: 'Birth weight must be greater than zero.'
    },
    ageOfDam: {
      required: 'Dam age is required.',
      oneOf: 'Valid dam age options are 2, 3, 4, 5 (5 -10), or 11 (11+).'
    }
  },
  formatters: {
    ageOfDam: val => __chunk_2.damAgeOptionLabels[val] || val
  }
};

module.exports = adjustedBirthWeightForm;
