
const calculateBreedingDate = require('../../../dist/cjs/breedingDate');

test('returns correct breeding date', () => {
    const results = calculateBreedingDate({
        birthingDate: '6/1/2018',
        gestation: 283
    });
    expect(results.breedingDate.toISOString()).toBe('2017-08-22T06:00:00.000Z');
})