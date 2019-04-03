
const calculateBirthingPercentage = require('../../../dist/cjs/birthingPercentage');

test('returns correct results', () => {
    const results = calculateBirthingPercentage({
        numberBorn: 89,
        numberFemalesExposed: 100,
        numberFemalesSoldOrDied: 2,
        numberFemalesPurchased: 1
    });
    expect(results.birthingPercentage).toBe(89.9);
})