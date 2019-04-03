'use strict';

require('@agc-calculators/calculators-core');
require('./chunk-e9ad9a45.js');
var birthingPercentage = require('./birthingPercentage.js');

var birthingPercentageForm = {
  id: 'birthing-percentage',
  name: 'Birthing Percentage',
  description: 'Calculates a birthing percentage.',
  category: 'livestock',
  inputs: {
    numberBorn: {
      type: 'number',
      label: 'Number Offspring Born',
      validators: ['required', 'number', 'min'],
      params: {
        min: 0
      }
    },
    numberFemalesExposed: {
      type: 'number',
      label: 'Number of Females Exposed',
      validators: ['required', 'number', 'min'],
      params: {
        min: 0
      }
    },
    numberFemalesSoldOrDied: {
      type: 'number',
      label: 'Number of Females Sold or Died',
      validators: ['required', 'number', 'min'],
      params: {
        min: 0
      }
    },
    numberFemalesPurchased: {
      type: 'number',
      label: 'Number of Females Purchased',
      validators: ['required', 'number', 'min'],
      params: {
        min: 0
      }
    }
  },
  outputs: {
    birthingPercentage: {
      type: 'number',
      label: 'Birthing Percentage',
      units: '%'
    },
    calculated: {
      type: 'date',
      label: 'Calculated Date'
    }
  },
  calculator: birthingPercentage,
  messages: {
    numberBorn: {
      required: 'Number of offspring born is required',
      number: 'Number of offspring born must be a number',
      min: 'Number of offspring born should be zero or greater'
    },
    numberFemalesExposed: {
      required: 'Number of females exposed is required',
      number: 'Number of females exposed must be a number',
      min: 'Number of females exposed should be zero or greater'
    },
    numberFemalesSoldOrDied: {
      required: 'Number of females sold or died is required',
      number: 'Number of females sold or died must be a number',
      min: 'Number of females sold or died should be zero or greater'
    },
    numberFemalesPurchased: {
      required: 'Number of females purchased is required',
      number: 'Number of females purchased must be a number',
      min: 'Number of females purchased should be zero or greater'
    }
  }
};

module.exports = birthingPercentageForm;
