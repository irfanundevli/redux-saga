const fs = require('fs');
const path = require('path');
const fakeCustomers = require('./fakeCustomers');

const { customers } = fakeCustomers();
const data = JSON.stringify({ customers });
const filepath = path.join(__dirname, 'db.json');

fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log('Mock DB created.');
});
