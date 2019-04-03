import '@agc-calculators/calculators-core';
import './chunk-21ca27fa.js';
import calculateAdjustedWeaningWeight from './adjustedWeaningWeight.js';
import { e as genderOptions, c as damAgeOptions, f as genderOptionLabels, d as damAgeOptionLabels } from './chunk-432aa952.js';

var adjustedWeaningWeightForm = {
  id: 'adj-weaning-weight',
  name: 'Adjusted 205 Day Weaning Weight',
  category: 'livestock',
  description: 'Calculates an adjusted weaning weight at 204 days based on gender, dam age, current age and weight.',
  inputs: {
    gender: {
      type: 'select',
      label: 'Gender',
      validators: ['required', 'oneOf'],
      params: {
        oneOf: ['male', 'female']
      },
      default: 'male',
      options: genderOptions
    },
    birthWeight: {
      type: 'number',
      label: 'Birth Weight',
      units: 'lbs',
      validators: ['required', 'number', 'min'],
      params: {
        min: 1
      }
    },
    currentWeight: {
      type: 'number',
      label: 'Current Weight',
      units: 'lbs',
      validators: ['required', 'number', 'gt'],
      params: {
        gt: 'birthWeight'
      }
    },
    currentAge: {
      type: 'number',
      label: 'Current Age',
      validators: ['required', 'number', 'min', 'max'],
      params: {
        min: 150,
        max: 300
      }
    },
    ageOfDam: {
      type: 'select',
      label: 'Age of Dam',
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
    averageDailyGain: {
      type: 'number',
      label: 'Average Daily Gain',
      units: 'lbs/day'
    },
    adjustedWeaningWeight: {
      type: 'number',
      label: 'Adjusted 205 Day Weaning Weight',
      units: 'lbs'
    },
    calculated: {
      type: 'date',
      label: 'Calculated Date'
    }
  },
  calculator: calculateAdjustedWeaningWeight,
  messages: {
    gender: {
      required: 'Please provide a gender',
      oneOf: 'Gender must be male or female'
    },
    birthWeight: {
      required: 'Birth weight is required.',
      number: 'Birth weight must be a number',
      min: 'Birth weight must be greater than zero.'
    },
    currentWeight: {
      required: 'Current weight is required.',
      number: 'Current weight must be a number',
      min: 'Current weight must be greater than the birth weight.'
    },
    currentAge: {
      required: 'Current age is required',
      number: 'Current age must be a number',
      min: 'Current age should be between 150 and 300',
      max: 'Current age should be bewtween 150 and 300'
    },
    ageOfDam: {
      required: 'Please provide the age of the dam.',
      oneOf: 'Age of dam should be 2, 3, 4, 5 or 11.'
    }
  },
  formatters: {
    gender: val => genderOptionLabels[val] || val,
    ageOfDam: val => damAgeOptionLabels[val] || val
  }
};

export default adjustedWeaningWeightForm;
