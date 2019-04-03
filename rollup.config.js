import { terser } from "rollup-plugin-terser";
import babel from 'rollup-plugin-babel';

export default [
  {
    input: "lib/index.js",
    plugins: [
        babel(),
        terser()
    ],
    external: ["@agc-calculators/calculators-core"],
    output: {
      file: "dist/umd/agc-livestock.js",
      format: "umd",
      name: "agcLivestockCalculators",
      globals: {
        '@agc-calculators/calculators-core': 'agcCalculatorsCore'
      },
      esModule: false
    }
  },
  {
    input: {
        index: 'lib/index.js',
        birthingDate: 'lib/calculators/birthing-date.js',
        breedingDate: 'lib/calculators/breeding-date.js',
        daysOnFeed: 'lib/calculators/days-on-feed.js',
        adjustedBirthWeight: 'lib/calculators/adj-birth-weight.js',
        averageDailyGain: 'lib/calculators/average-daily-gain.js',
        adjustedWeaningWeight: 'lib/calculators/adj-weaning-weight.js',
        adjustedYearlingWeight: 'lib/calculators/adj-yearling-weight.js',
        deathLoss: 'lib/calculators/death-loss.js',
        weightGain: 'lib/calculators/weight-gain.js',
        birthingSeason: 'lib/calculators/birthing-season.js',
        weightWeaned: 'lib/calculators/weight-weaned.js',
        birthingPercentage: 'lib/calculators/birthing-percentage.js',
        weaningPercentage: 'lib/calculators/weaning-percentage.js',
        cattleReplacementsNeeded: 'lib/calculators/cattle-replacements-needed.js',
        feedCost: 'lib/calculators/feed-cost.js',

        birthingDateForm: 'lib/forms/birthing-date-form.js',
        breedingDateForm: 'lib/forms/breeding-date-form.js',
        daysOnFeedForm: 'lib/forms/days-on-feed-form.js',
        adjustedBirthWeightForm: 'lib/forms/adj-birth-weight-form.js',
        averageDailyGainForm: 'lib/forms/average-daily-gain-form.js',
        adjustedWeaningWeightForm: 'lib/forms/adj-weaning-weight-form.js',
        adjustedYearlingWeightForm: 'lib/forms/adj-yearling-weight-form.js',
        deathLossForm: 'lib/forms/death-loss-form.js',
        weightGainForm: 'lib/forms/weight-gain-form.js',
        birthingSeasonForm: 'lib/forms/birthing-season-form.js',
        weightWeanedForm: 'lib/forms/weight-weaned-form.js',
        birthingPercentageForm: 'lib/forms/birthing-percentage-form.js'
    },
    plugins: [
        babel()
    ],
    external: ["@agc-calculators/calculators-core"],
    output: [{
        dir: 'dist/esm',
        format: 'esm',
        globals: {
          '@agc-calculators/calculators-core': 'agcCalculatorsCore'
        }
    }, {
        dir: 'dist/cjs',
        format: 'cjs',
        globals: {
          '@agc-calculators/calculators-core': 'agcCalculatorsCore'
        }
    }]
  }
];
