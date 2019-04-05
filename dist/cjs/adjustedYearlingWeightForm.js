'use strict';

var calculatorsCore = require('@agc-calculators/calculators-core');
require('./chunk-e9ad9a45.js');
var adjustedYearlingWeight = require('./adjustedYearlingWeight.js');

var adjustedYearlingWeightForm = {
  id: 'adj-yearling-weight',
  name: 'Adjusted 365 Day Yearling Weight',
  category: 'livestock',
  description: 'Calculates an adjusted yearling weight at 365 days based on current age, weight and an adjusted weaning weight.',
  inputs: {
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
      units: 'days',
      validators: ['required', 'number', 'min', 'max'],
      params: {
        min: 250,
        max: 450
      }
    },
    adjustedWeaningWeight: {
      type: 'number',
      label: 'Adjusted Weaning Weight',
      units: 'lbs',
      validators: ['required', 'number', 'min'],
      params: {
        min: 1
      }
    }
  },
  outputs: {
    averageDailyGain: {
      type: 'number',
      label: 'Average Daily Gain',
      units: 'lbs'
    },
    adjustedYearlingWeight: {
      type: 'number',
      label: 'Adjusted Yearling Weight',
      units: 'lbs'
    },
    calculated: {
      type: 'date',
      label: 'Calculated Date'
    }
  },
  calculator: adjustedYearlingWeight,
  messages: {
    currentWeight: {
      required: 'Current weight is required.',
      number: 'Current weight must be a number.'
    },
    currentAge: {
      required: 'Current age is required.',
      number: 'Current age must be a number',
      min: 'Current age should be between 250 and 450.',
      max: 'Current age should be bewtween 250 and 450.'
    },
    adjustedWeaningWeight: {
      required: 'Adjusted weaning weight is required.',
      number: 'Adjusted weaning weight must be a number.',
      min: 'Adjusted weaning weight should be greater than zero.'
    }
  },
  formatters: {
    date: val => calculatorsCore.formatDate(val) || val
  },
  calendar: {
    adjustedYearlingWeight: ({
      calculated,
      adjustedYearlingWeight,
      units = 'lbs'
    }) => ({
      subject: 'Adjusted 365 Day Yearling Weight',
      details: `${adjustedYearlingWeight} ${units} ${adjustment > 0 ? `(+${adjustment} ${units})` : ''}`,
      from: calculated
    })
  },
  dashboard: {
    adjustedYearlingWeight: {
      id: 'adjusted-yearling-weight',
      calculator: 'adj-yearling-weight',
      widget: 'measure',
      params: {
        title: 'Adjusted 365 Day Yearling Weight',
        measure: ({
          adjustedYearlingWeight,
          units = 'lbs'
        }) => `${adjustedYearlingWeight} ${units}`,
        units: 'lbs',
        source: 'calculator',
        details: ({
          calculated,
          formatters
        }) => `Measurement taken on ${formatters['date'](calculated)}`
      }
    }
  }
};

module.exports = adjustedYearlingWeightForm;
