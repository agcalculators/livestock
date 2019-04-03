
const calculateFeedCost = require('../../../dist/cjs/feedCost');

test('returns correct results', () => {
    const results = calculateFeedCost({
        startWeight: 500,
        endWeight: 1200,
        daysOnFeed: 320,
        totalFeedCost: 360
    });

    expect(results.errors.count).toBe(0);

    expect(results.averageDailyGain).toBe(2.19);
    expect(results.feedCostPerWeight).toBe(0.51);
    expect(results.feedCostPerDay).toBe(1.13);
})