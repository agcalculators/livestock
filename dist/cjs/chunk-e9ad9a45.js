'use strict';

var calculatorsCore = require('@agc-calculators/calculators-core');

const filterErrors = errors => {
  if (!errors || calculatorsCore.isEmpty(errors)) {
    return errors;
  }

  let errs = Object.keys(errors).reduce((obj, current) => {
    if (!calculatorsCore.isEmpty(errors[current])) {
      obj[current] = errors[current];
    }

    return obj;
  }, {});
  return Object.assign({}, errs, {
    count: errors.count
  });
};
const countErrors = errors => {
  if (!errors || calculatorsCore.isEmpty(errors)) {
    return 0;
  }

  return Object.keys(errors).reduce((cnt, current) => {
    if (!calculatorsCore.isEmpty(errors[current])) {
      cnt++;
    }

    return cnt;
  }, 0);
};

exports.countErrors = countErrors;
exports.filterErrors = filterErrors;
