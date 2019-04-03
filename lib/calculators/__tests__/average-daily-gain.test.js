
const calculateAverageDailyGain = require('../../../dist/cjs/averageDailyGain');

test('Calculate returns correct values', () => {
    const results = calculateAverageDailyGain({
        startWeight: 400,
        endWeight: 1200,
        daysOnFeed: 320
    });
    expect(results.errors.count).toBe(0);
    /*
        (1200 - 400) / 320 = 2.5
    */
    expect(results.averageDailyGain).toBe(2.5);
})