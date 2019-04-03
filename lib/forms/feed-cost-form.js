import calculateFeedCost from '../calculators/feed-cost';
import { formatCurrency } from '@agc-calculators/calculators-core';

export default {
    id: 'feed-cost',
    name: 'Feed Cost',
    description: 'Calculates the cost of feed per weight and day based on total feed costs.',
    category: 'livestock',
    inputs: {
        startWeight: { type: 'number', label: 'Starting Weight', units: 'lbs', validators: ['required', 'number', 'min'], params: { min: 1 } },
        endWeight: { type: 'number', label: 'Ending Weight', units: 'lbs', validators: ['required', 'number', 'gt'], params: { gt: 'startWeight' } },        
        daysOnFeed: { type: 'number', label: 'Days on Feed', validators: ['required', 'number', 'min'], params: { min: 1 } },
        totalFeedCost: { type: 'number', label: 'Total Feed Cost', validators: ['required', 'number', 'min'], params: { min: 0 } }        
    },
    outputs: {
        totalWeightGain: { type: 'number', label: 'Total Weight Gain', units: 'lbs' },
        averageDailyGain: { type: 'number', label: 'Average Daily Gain', units: 'lbs/day' },
        feedCostPerWeight: { type: 'number', label: 'Feed Cost per Weight' },
        feedCostPerDay: { type: 'date', label: 'Feed Cost per Day'}
    },
    calculator: calculateFeedCost,
    messages: {
        startWeight: { required: 'Starting weight is required', number: 'Starting weight must be a number', min: 'Starting weight should be greater than zero.'},
        endWeight: { required: 'Ending weight is required', number: 'Ending weight must be a number', gt: 'Ending weight should be greater than the starting weight.'},
        daysOnFeed: { required: 'Days on feed is required', number: 'Days on feed must be a number', min: 'Days on feed should be greater than zero.'},
        totalFeedCost: { required: 'Total feed cost is required', number: 'Total feed cost must be a number', min: 'Total feed cost should be zero or greater.'},
    },
    formatters: {
        totalFeedCost: (val) => formatCurrency(val),
        feedCostPerWeight: (val) => formatCurrency(val),
        feedCostPerDay: (val) => formatCurrency(val)
    }
}