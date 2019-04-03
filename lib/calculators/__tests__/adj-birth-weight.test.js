
const calculateAdjustedBirthWeight = require('../../../dist/cjs/adjustedBirthWeight');

test('Calculate returns correct values', () => {
    const results = calculateAdjustedBirthWeight({        
        birthWeight: 100,
        ageOfDam: '2'
    });

    expect(results.errors.count).toBe(0);
    /*
        Dam age adjustements:
        2 = 8 lbs
        3 = 5 lbs
        4 = 2 lbs
        5 - 10 = 0 lbs
        11 + = 3 lbs

        '2' => 8 + 100 = 108
    */
    expect(results.adjustedBirthWeight).toBe(108);
    expect(results.adjustment).toBe(8);
})