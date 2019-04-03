'use strict';

require('@agc-calculators/calculators-core');
var averageDailyGain = require('./averageDailyGain.js');

var averageDailyGainForm = {
  id: 'average-daily-gain',
  name: 'Average Daily Gain',
  description: 'Calculates an average daily gain.',
  inputs: {
    startWeight: {
      type: 'number',
      label: 'Starting Weight',
      units: 'lbs',
      validators: ['required', 'number', 'min'],
      params: {
        min: 1
      }
    },
    endWeight: {
      type: 'number',
      label: 'Ending Weight',
      units: 'lbs',
      validators: ['required', 'min', 'gt'],
      params: {
        min: 1,
        gt: 'startWeight'
      }
    },
    daysOnFeed: {
      type: 'number',
      label: 'Days on Feed',
      validators: ['required', 'min'],
      params: {
        min: 1
      }
    }
  },
  outputs: {
    weightGain: {
      type: 'number',
      label: 'Weight Gain',
      units: 'lbs'
    },
    averageDailyGain: {
      type: 'number',
      label: 'Average Daily Gain',
      units: 'lbs/day'
    },
    calculated: {
      type: 'date',
      label: 'Calculated Date'
    }
  },
  calculator: averageDailyGain,
  messages: {
    startWeight: {
      required: 'Starting weight is required',
      number: 'Starting weight must be a number.',
      min: 'Starting weight must be greater than zero.'
    },
    endWeight: {
      required: 'Ending weight is required',
      number: 'Ending weight must be a number.',
      gt: 'End weight must be greater than the starting weight.'
    },
    daysOnFeed: {
      required: 'Days on feed is required',
      number: 'Days on feed must be a number',
      min: 'Days on feed must be greater than zero.'
    }
  }
};

module.exports = averageDailyGainForm;
