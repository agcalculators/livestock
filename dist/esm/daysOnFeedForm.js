import '@agc-calculators/calculators-core';
import './chunk-21ca27fa.js';
import calculateDaysOnFeed from './daysOnFeed.js';

var daysOnFeedForm = {
  id: 'days-on-feed',
  name: 'Days on Feed',
  description: 'Calculates the average number of days on feed based on average daily gain.',
  inputs: {
    startDate: {
      type: 'date',
      label: 'Start Date',
      validators: ['required', 'date'],
      default: () => new Date()
    },
    startWeight: {
      type: 'number',
      label: 'Starting Weight',
      units: 'lbs',
      validators: ['required', 'min'],
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
    averageDailyGain: {
      type: 'number',
      label: 'Average Daily Gain',
      units: 'lbs/day',
      validators: ['required', 'min'],
      params: {
        min: 0
      },
      precision: 2
    }
  },
  outputs: {
    weightGain: {
      type: 'number',
      label: 'Weight Gain',
      units: 'lbs'
    },
    daysOnFeed: {
      type: 'number',
      label: 'Days on Feed'
    },
    endDate: {
      type: 'date',
      label: 'End Date'
    },
    calculated: {
      type: 'date',
      label: 'Calculated Date'
    }
  },
  calculator: calculateDaysOnFeed,
  messages: {
    startDate: {
      required: 'Start date is required.',
      date: 'Start date must be a valid date.'
    },
    startWeight: {
      required: 'Starting weight is required.',
      number: 'Starting weight must be a number.',
      min: 'Starting weight must be greater than zero.'
    },
    endWeight: {
      required: 'Ending weight is required.',
      number: 'Ending weight must be a number.',
      gt: 'Ending weight must be greater than starting weight.'
    },
    averageDailyGain: {
      required: 'Average daily gain is required.',
      number: 'Average daily gain must be a number.',
      min: 'Average daily gain must be greater than zero.'
    }
  },
  calendar: {
    daysOnFeed: ({
      startDate,
      endDate
    }) => ({
      subject: 'Days on Feed',
      from: startDate,
      to: endDate
    })
  }
};

export default daysOnFeedForm;
