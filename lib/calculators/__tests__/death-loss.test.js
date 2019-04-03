
const calculateDeathLoss = require('../../../dist/cjs/deathLoss');

test('returns correct death loss rates', () => {
    const results = calculateDeathLoss({
        femalesExposed: 100,
        numberBorn: 89,
        numberLost: 5
    });

    expect(results.errors.count).toBe(0);

    expect(results.deathLossBorn).toBe(5.6);
    expect(results.deathLossExposed).toBe(5.0);
})