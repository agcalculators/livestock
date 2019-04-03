
const calculateWeaningPercentage = require('../../../dist/cjs/weaningPercentage');

test('returns correct results', () => {
    const results = calculateWeaningPercentage({
        numberWeaned: 84,
        numberFemalesExposed: 100,
        numberFemalesSoldOrDied: 2,
        numberFemalesPurchased: 1
    });
    expect(results.weaningPercentage).toBe(84.8);
})