'use strict';

const genderOptions = [{
  text: 'Male',
  value: 'male'
}, {
  text: 'Female',
  value: 'female'
}];
const genderOptionLabels = genderOptions.reduce((obj, current) => {
  obj[current.value] = current.text;
  return obj;
}, {});
const damAgeOptions = [{
  text: '2 Years Old',
  value: '2'
}, {
  text: '3 Years Old',
  value: '3'
}, {
  text: '4 Years Old',
  value: '4'
}, {
  text: '5 - 10 Years Old',
  value: '5'
}, {
  text: '11 Years and Older',
  value: '11'
}];
const damAgeOptionLabels = damAgeOptions.reduce((obj, current) => {
  obj[current.value] = current.text;
  return obj;
}, {});

exports.damAgeOptionLabels = damAgeOptionLabels;
exports.damAgeOptions = damAgeOptions;
exports.genderOptionLabels = genderOptionLabels;
exports.genderOptions = genderOptions;
