module.exports = function() {
  var faker = require('faker');
  var _ = require('lodash');

  return {
    customers: _.times(5, function(i) {
      return {
        id: i,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        city: faker.address.city(),
      };
    }),
  };
};
