
const calculateWeightGain = require('../../../dist/cjs/weightGain');

test('returns correct results', () => {
    const results = calculateWeightGain({
        headCount: 100,
        totalFeedIntake: 20000,
        feedConversionRate: 6.1,
        startWeight: 500
    });

    expect(results.errors.count).toBe(0);

    expect(results.weightGainPerHead).toBe(33);
    expect(results.totalWeightGain).toBe(3300);
})