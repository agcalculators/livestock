'use strict';

require('@agc-calculators/calculators-core');
require('./chunk-e9ad9a45.js');
var weightGain = require('./weightGain.js');

var weightGainForm = {
  id: 'weight-gain',
  name: 'Weight Gain',
  description: 'Calculates the amount of weight gained based on consumption.',
  category: 'livestock',
  inputs: {
    headCount: {
      type: 'number',
      label: 'Head Count',
      validators: ['required', 'number', 'min'],
      params: {
        min: 1
      }
    },
    totalFeedIntake: {
      type: 'number',
      label: 'Total Feed Intake',
      units: 'lbs',
      validators: ['required', 'number', 'min'],
      params: {
        min: 0
      }
    },
    feedConversionRate: {
      type: 'number',
      label: 'Feed Conversion Rate',
      validators: ['required', 'number', 'min'],
      params: {
        min: 1
      }
    },
    startWeight: {
      type: 'number',
      label: 'Starting Weight',
      units: 'lbs',
      validators: ['required', 'number', 'min'],
      params: {
        min: 1
      }
    }
  },
  outputs: {
    weightGainPerHead: {
      type: 'number',
      label: 'Weight Gained per Head',
      units: 'lbs'
    },
    totalWeightGain: {
      type: 'number',
      label: 'Total Weight Gain',
      units: 'lbs'
    },
    endWeight: {
      type: 'number',
      label: 'Ending Weight',
      units: 'lbs'
    },
    calculated: {
      type: 'date',
      label: 'Calculated Date'
    }
  },
  calculator: weightGain,
  messages: {
    headCount: {
      required: 'Head count is required',
      number: 'Head count must be a number',
      min: 'Head count should be greater than zero'
    },
    totalFeedIntake: {
      required: 'Total feed intake is required',
      number: 'Total feed intake must be a number',
      min: 'Total feed intake should be zero or greater.'
    },
    feedConversionRate: {
      required: 'Feed conversion rate is required',
      number: 'Feed conversion rate must be a number',
      min: 'Feed conversion rate should be greater than zero.'
    },
    startWeight: {
      required: 'Starting weight is required',
      number: 'Starting weight must be a number',
      min: 'Starting weight should be greater than zero.'
    }
  },
  formatters: {
    feedConversionRate: val => `${val}:1`
  }
};

module.exports = weightGainForm;
