
const calculateDaysOnFeed = require('../../../dist/cjs/daysOnFeed');

test('Calculate returns correct values', () => {
    const results = calculateDaysOnFeed({
        startDate: '6/1/2018',
        startWeight: 400,
        endWeight: 1200,
        averageDailyGain: 2.4
    });
    expect(results.errors.count).toBe(0);
    expect(results.daysOnFeed).toBe(333);
})