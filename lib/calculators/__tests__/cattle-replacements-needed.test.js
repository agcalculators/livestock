
const calculateCattleReplacementsNeeded = require('../../../dist/cjs/cattleReplacementsNeeded');

test('Calculate returns correct values', () => {
    const results = calculateCattleReplacementsNeeded({
        herdSize: 100,
        replacementRate: 16.88
    });
    expect(results.errors.count).toBe(0);
    expect(results.replacementsNeeded).toBe(17);
    expect(results.averageCowAge).toBe(6);
})