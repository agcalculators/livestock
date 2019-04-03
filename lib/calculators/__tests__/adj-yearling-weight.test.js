
const calculateAdjustedYearlingWeight = require('../../../dist/cjs/adjustedYearlingWeight');

test('Calculate returns correct values', () => {
    const results = calculateAdjustedYearlingWeight({        
        currentWeight: 750,
        currentAge: 380,
        adjustedWeaningWeight: 500
    });

    expect(results.errors.count).toBe(0);

    expect(results.averageDailyGain).toBe(1.43);
    expect(results.adjustedYearlingWeight).toBe(729);
})