const updateDateFields = (obj) => {
  for (let [key, value] of Object.entries(obj)) {
    // console.log(value.constructor.name);
    if (value.constructor.name === 'Date') {
      obj[key] = value.toLocaleString();
    }
  }
  return obj;
};
module.exports = {
  updateDateFields,
};
