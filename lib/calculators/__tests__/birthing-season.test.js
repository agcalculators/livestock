
const calculateBirthingSeason = require('../../../dist/cjs/birthingSeason');

test('returns correct results', () => {
    const results = calculateBirthingSeason({
        sireTurnOutDate: '6/1/2018',
        breedingSeasonLength: 60,
        gestation: 283
    });
    expect(results.birthingSeasonStart.toISOString()).toBe('2019-03-11T06:00:00.000Z');
    expect(results.birthingSeasonEnd.toISOString()).toBe('2019-05-10T06:00:00.000Z');
})