

export const genderOptions = [
    { text: 'Male', value: 'male' },
    { text: 'Female', value: 'female' }
];

export const genderOptionLabels = genderOptions.reduce((obj, current) => {
    obj[current.value] = current.text;
    return obj;
}, {});

export const damAgeOptions = [
    { text: '2 Years Old', value: '2'},
    { text: '3 Years Old', value: '3' },
    { text: '4 Years Old', value: '4' },
    { text: '5 - 10 Years Old', value: '5' },
    { text: '11 Years and Older', value: '11' }
];

export const damAgeOptionLabels = damAgeOptions.reduce((obj, current) => {
    obj[current.value] = current.text;
    return obj;
}, {});

export const gestationOptions = [
    { text: 'Chicken - 21 Days', value: 21 },
    { text: 'Cow - 283 Days', value: 283 },
    { text: 'Ewe - 147 Days', value: 147 },
    { text: 'Goat - 150 Days', value: 150 },
    { text: 'Heifer - 279 Days', value: 279 },
    { text: 'Mare - 342 Days', value: 342 },
    { text: 'Sow - 114 Days', value: 114 }
];

export const gestationOptionLabels = gestationOptions.reduce((obj, current) => {
    obj[current.value] = current.text;
    return obj;
}, {});