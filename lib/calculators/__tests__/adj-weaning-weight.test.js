
const calculateAdjustedWeaningWeight = require('../../../dist/cjs/adjustedWeaningWeight');

test('Calculate returns correct values', () => {
    const results = calculateAdjustedWeaningWeight({  
        gender: 'male',              
        birthWeight: 100,
        currentWeight: 500,
        currentAge: 200,
        ageOfDam: '2'
    });

    expect(results.errors.count).toBe(0);
    /*
        Dam age adjustements:
        2  => male = 60, female = 54 
        3  => male = 40, female = 36 
        4  => male = 20, female = 18  
        5  => male = 0,  female = 0
        11 => male = 20, female = 18

        '2' male => 60
    */
    expect(results.adjustment).toBe(60);
    expect(results.adjustedWeaningWeight).toBe(570);
    expect(results.averageDailyGain).toBe(2);
    
})