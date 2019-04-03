import '@agc-calculators/calculators-core';
import './chunk-21ca27fa.js';
import calculateAdjustedBirthWeight from './adjustedBirthWeight.js';
import { c as damAgeOptions, d as damAgeOptionLabels } from './chunk-432aa952.js';

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
      options: damAgeOptions
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
  calculator: calculateAdjustedBirthWeight,
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
    ageOfDam: val => damAgeOptionLabels[val] || val
  }
};

export default adjustedBirthWeightForm;
