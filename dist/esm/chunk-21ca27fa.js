import { isEmpty } from '@agc-calculators/calculators-core';

const filterErrors = errors => {
  if (!errors || isEmpty(errors)) {
    return errors;
  }

  let errs = Object.keys(errors).reduce((obj, current) => {
    if (!isEmpty(errors[current])) {
      obj[current] = errors[current];
    }

    return obj;
  }, {});
  return Object.assign({}, errs, {
    count: errors.count
  });
};
const countErrors = errors => {
  if (!errors || isEmpty(errors)) {
    return 0;
  }

  return Object.keys(errors).reduce((cnt, current) => {
    if (!isEmpty(errors[current])) {
      cnt++;
    }

    return cnt;
  }, 0);
};

export { countErrors as a, filterErrors as b };
