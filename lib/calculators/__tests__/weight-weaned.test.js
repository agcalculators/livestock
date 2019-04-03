
const calculateWeightWeaned = require('../../../dist/cjs/weightWeaned');

test('Calculate returns correct values', () => {
    const results = calculateWeightWeaned({
        totalWeightWeaned: 38000,
        femalesExposed: 60
    });
    expect(results.errors.count).toBe(0);
    expect(results.weightWeanedPerFemale).toBe(633);
})