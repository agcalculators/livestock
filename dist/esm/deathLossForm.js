import '@agc-calculators/calculators-core';
import './chunk-21ca27fa.js';
import calculateDeathLoss from './deathLoss.js';

var deathLossForm = {
  id: 'death-loss',
  name: 'Death Loss',
  description: 'Calculates born and exposed death loss rates.',
  inputs: {
    femalesExposed: {
      type: 'number',
      label: 'Females Exposed',
      validators: ['required', 'number', 'min'],
      params: {
        min: 1
      }
    },
    numberBorn: {
      type: 'number',
      label: 'Number Born Alive',
      validators: ['required', 'min'],
      params: {
        min: 0
      }
    },
    numberLost: {
      type: 'number',
      label: 'Number Lost Before Weaning',
      validators: ['required', 'min'],
      params: {
        min: 0
      }
    }
  },
  outputs: {
    deathLossBorn: {
      type: 'number',
      label: 'Death Loss (born)',
      units: '%'
    },
    deathLossExposed: {
      type: 'number',
      label: 'Death Loss (exposed)',
      units: '%'
    },
    calculated: {
      type: 'date',
      label: 'Calculated Date'
    }
  },
  calculator: calculateDeathLoss,
  messages: {
    femalesExposed: {
      required: 'Females exposed is required',
      number: 'Females exposed must be a number',
      min: 'Females exposed should be greater than zero'
    },
    numberBorn: {
      required: 'Number born is required',
      number: 'Number born must be a number',
      min: 'Number born should be zero or greater.'
    },
    numberLost: {
      required: 'Number lost is required',
      number: 'Number lost must be a number',
      min: 'Number lost should be zero or greater.'
    }
  }
};

export default deathLossForm;
