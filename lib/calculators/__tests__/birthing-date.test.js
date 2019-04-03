
const calculateBirthingDate = require('../../../dist/cjs/birthingDate');

test('returns correct birthing date', () => {
    const results = calculateBirthingDate({
        breedingDate: '6/1/2017',
        gestation: 283
    });
    expect(results.birthingDate.toISOString()).toBe('2018-03-11T06:00:00.000Z');
})