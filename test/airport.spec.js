const test = require('../test-framework.js');
const Airport = require("../src/airport");

let expected;
let actual;
let result;
let airplane1;
let airport;

// Test 1 - is anything added to the basket?

console.log(`============================`);
console.log(`Test 1 - Airport#land()`);

//
test.it('cannot landed if the plane is already in the airport', function() {
    // setup
    airport = new Airport();
    airplane1 = {id: '1'};
    expected = 'This plane is already landed at the airport';
    airport.land(airplane1);
      // execute
      let result = airport.land(airplane1);
      // verify
      test.assertEquals(result, "This plane is already landed at the airport");
    });
