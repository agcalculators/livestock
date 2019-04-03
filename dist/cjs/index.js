'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var calculatorsCore = require('@agc-calculators/calculators-core');
require('./chunk-e9ad9a45.js');
var birthingDate = require('./birthingDate.js');
var breedingDate = require('./breedingDate.js');
var daysOnFeed = require('./daysOnFeed.js');
var weightGain = require('./weightGain.js');
var averageDailyGain = require('./averageDailyGain.js');
var adjustedBirthWeight = require('./adjustedBirthWeight.js');
var adjustedWeaningWeight = require('./adjustedWeaningWeight.js');
var adjustedYearlingWeight = require('./adjustedYearlingWeight.js');
var deathLoss = require('./deathLoss.js');
var birthingSeason = require('./birthingSeason.js');
var weightWeaned = require('./weightWeaned.js');
var birthingPercentage = require('./birthingPercentage.js');
var weaningPercentage = require('./weaningPercentage.js');
var cattleReplacementsNeeded = require('./cattleReplacementsNeeded.js');
var feedCost = require('./feedCost.js');
require('./chunk-5a6a9181.js');
var birthingDateForm = require('./birthingDateForm.js');
var breedingDateForm = require('./breedingDateForm.js');
var daysOnFeedForm = require('./daysOnFeedForm.js');
var adjustedBirthWeightForm = require('./adjustedBirthWeightForm.js');
var averageDailyGainForm = require('./averageDailyGainForm.js');
var adjustedWeaningWeightForm = require('./adjustedWeaningWeightForm.js');
var adjustedYearlingWeightForm = require('./adjustedYearlingWeightForm.js');
var deathLossForm = require('./deathLossForm.js');
var weightGainForm = require('./weightGainForm.js');
var birthingSeasonForm = require('./birthingSeasonForm.js');
var weightWeanedForm = require('./weightWeanedForm.js');
var birthingPercentageForm = require('./birthingPercentageForm.js');

var index = {
  calculateBirthingDate: birthingDate,
  calculateBreedingDate: breedingDate,
  calculateDaysOnFeed: daysOnFeed,
  calculateWeightGain: weightGain,
  calculateAverageDailyGain: averageDailyGain,
  calculateAdjustedBirthWeight: adjustedBirthWeight,
  calculateAdjustedWeaningWeight: adjustedWeaningWeight,
  calculateAdjustedYearlingWeight: adjustedYearlingWeight,
  calculateDeathLoss: deathLoss,
  calculateBirthingSeason: birthingSeason,
  calculateWeightWeaned: weightWeaned,
  calculateBirthingPercentage: birthingPercentage,
  calculateWeaningPercentage: weaningPercentage,
  calculateCattleReplacementsNeeded: cattleReplacementsNeeded,
  calculateFeedCost: feedCost
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
  calculator: weaningPercentage,
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
  calculator: cattleReplacementsNeeded,
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
  calculator: feedCost,
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
    totalFeedCost: val => calculatorsCore.formatCurrency(val),
    feedCostPerWeight: val => calculatorsCore.formatCurrency(val),
    feedCostPerDay: val => calculatorsCore.formatCurrency(val)
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

exports.calculators = index;
exports.forms = index$1;
