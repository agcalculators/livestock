import { formatCurrency } from '@agc-calculators/calculators-core';
import './chunk-21ca27fa.js';
import calculateBirthingDate from './birthingDate.js';
import calculateBreedingDate from './breedingDate.js';
import calculateDaysOnFeed from './daysOnFeed.js';
import calculateWeightGain from './weightGain.js';
import calculateAverageDailyGain from './averageDailyGain.js';
import calculateAdjustedBirthWeight from './adjustedBirthWeight.js';
import calculateAdjustedWeaningWeight from './adjustedWeaningWeight.js';
import calculateAdjustedYearlingWeight from './adjustedYearlingWeight.js';
import calculateDeathLoss from './deathLoss.js';
import calculateBirthingSeason from './birthingSeason.js';
import calculateWeightWeaned from './weightWeaned.js';
import calculateBirthingPercentage from './birthingPercentage.js';
import calculateWeaningPercentage from './weaningPercentage.js';
import calculateCattleReplacementsNeeded from './cattleReplacementsNeeded.js';
import calculateFeedCost from './feedCost.js';
import './chunk-432aa952.js';
import birthingDateForm from './birthingDateForm.js';
import breedingDateForm from './breedingDateForm.js';
import daysOnFeedForm from './daysOnFeedForm.js';
import adjustedBirthWeightForm from './adjustedBirthWeightForm.js';
import averageDailyGainForm from './averageDailyGainForm.js';
import adjustedWeaningWeightForm from './adjustedWeaningWeightForm.js';
import adjustedYearlingWeightForm from './adjustedYearlingWeightForm.js';
import deathLossForm from './deathLossForm.js';
import weightGainForm from './weightGainForm.js';
import birthingSeasonForm from './birthingSeasonForm.js';
import weightWeanedForm from './weightWeanedForm.js';
import birthingPercentageForm from './birthingPercentageForm.js';

var index = {
  calculateBirthingDate,
  calculateBreedingDate,
  calculateDaysOnFeed,
  calculateWeightGain,
  calculateAverageDailyGain,
  calculateAdjustedBirthWeight,
  calculateAdjustedWeaningWeight,
  calculateAdjustedYearlingWeight,
  calculateDeathLoss,
  calculateBirthingSeason,
  calculateWeightWeaned,
  calculateBirthingPercentage,
  calculateWeaningPercentage,
  calculateCattleReplacementsNeeded,
  calculateFeedCost
};

var weaningPercentageForm = {
  id: 'weaning-percentage',
  name: 'Weaning Percentage',
  description: 'Calculates a weaning percentage.',
  category: 'livestock',
  inputs: {
    numberWeaned: {
      type: 'number',
      label: 'Number of Offspring Weaned',
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
    weaningPercentage: {
      type: 'number',
      label: 'Weaning Percentage',
      units: '%'
    },
    calculated: {
      type: 'date',
      label: 'Calculated Date'
    }
  },
  calculator: calculateWeaningPercentage,
  messages: {
    numberWeaned: {
      required: 'Number of offspring weaned is required',
      number: 'Number of offspring weaned must be a number',
      min: 'Number of offspring weaned should be zero or greater'
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

var cattleReplacementsNeededForm = {
  id: 'cattle-replacements-needed',
  name: 'Cattle Replacements Needed',
  description: 'Calculates the number of replacements required using a replacement rate.',
  category: 'livestock',
  inputs: {
    herdSize: {
      type: 'number',
      label: 'Herd Size',
      validators: ['required', 'number', 'min'],
      params: {
        min: 1
      }
    },
    replacementRate: {
      type: 'number',
      label: 'Replacement Rate',
      units: '%',
      validators: ['required', 'number', 'min'],
      params: {
        min: 0
      }
    }
  },
  outputs: {
    averageCowAge: {
      type: 'number',
      label: 'Average Female Age'
    },
    replacementsNeeded: {
      type: 'number',
      label: 'Replacements Needed'
    },
    calculated: {
      type: 'date',
      label: 'Calculated Date'
    }
  },
  calculator: calculateCattleReplacementsNeeded,
  messages: {
    herdSize: {
      required: 'Herd size is required.',
      number: 'Herd size must be a number',
      min: 'Herd size should be greater than zero.'
    },
    replacementRate: {
      required: 'Replacement rate is required.',
      number: 'Replacement rate must be a number',
      min: 'Replacement rate should be zero or greater.'
    }
  }
};

var feedCostForm = {
  id: 'feed-cost',
  name: 'Feed Cost',
  description: 'Calculates the cost of feed per weight and day based on total feed costs.',
  category: 'livestock',
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
      validators: ['required', 'number', 'gt'],
      params: {
        gt: 'startWeight'
      }
    },
    daysOnFeed: {
      type: 'number',
      label: 'Days on Feed',
      validators: ['required', 'number', 'min'],
      params: {
        min: 1
      }
    },
    totalFeedCost: {
      type: 'number',
      label: 'Total Feed Cost',
      validators: ['required', 'number', 'min'],
      params: {
        min: 0
      }
    }
  },
  outputs: {
    totalWeightGain: {
      type: 'number',
      label: 'Total Weight Gain',
      units: 'lbs'
    },
    averageDailyGain: {
      type: 'number',
      label: 'Average Daily Gain',
      units: 'lbs/day'
    },
    feedCostPerWeight: {
      type: 'number',
      label: 'Feed Cost per Weight'
    },
    feedCostPerDay: {
      type: 'date',
      label: 'Feed Cost per Day'
    }
  },
  calculator: calculateFeedCost,
  messages: {
    startWeight: {
      required: 'Starting weight is required',
      number: 'Starting weight must be a number',
      min: 'Starting weight should be greater than zero.'
    },
    endWeight: {
      required: 'Ending weight is required',
      number: 'Ending weight must be a number',
      gt: 'Ending weight should be greater than the starting weight.'
    },
    daysOnFeed: {
      required: 'Days on feed is required',
      number: 'Days on feed must be a number',
      min: 'Days on feed should be greater than zero.'
    },
    totalFeedCost: {
      required: 'Total feed cost is required',
      number: 'Total feed cost must be a number',
      min: 'Total feed cost should be zero or greater.'
    }
  },
  formatters: {
    totalFeedCost: val => formatCurrency(val),
    feedCostPerWeight: val => formatCurrency(val),
    feedCostPerDay: val => formatCurrency(val)
  }
};

var index$1 = {
  birthingDateForm,
  breedingDateForm,
  daysOnFeedForm,
  adjustedBirthWeightForm,
  averageDailyGainForm,
  adjustedWeaningWeightForm,
  adjustedYearlingWeightForm,
  deathLossForm,
  weightGainForm,
  birthingSeasonForm,
  weightWeanedForm,
  birthingPercentageForm,
  weaningPercentageForm,
  cattleReplacementsNeededForm,
  feedCostForm
};

export { index as calculators, index$1 as forms };
