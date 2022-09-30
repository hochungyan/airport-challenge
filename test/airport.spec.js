const test = require('../test-framework.js');
const Airport = require("../src/airport");
const Airplane = require("../src/airplane");

let expected;
let result;

// Test 1 - Airport#land()

console.log(`============================`);
console.log(`Test 1 - Airport#land()`);

//
test.it('cannot landed if the plane is already in the airport', function() {
    // setup
    let airport = new Airport();
    let airplane1 = new Airplane(1);
    expected = 'This plane is already landed at the airport';
    airport.land(airplane1);
    // execute
   result = airport.land(airplane1);
    // verify
      test.assertEquals(result, "This plane is already landed at the airport");
    });

   // Test 2 - Able to change the capacity of the Airport
   console.log(`============================`);
console.log(`Test 2 - New Airport()`);

//
test.it('cannot landed if the plane is already in the airport', function() {
    // setup
    let airport = new Airport(3);
    expected = 3;
   
    // execute
      result = airport.capacity
    // verify
      test.assertEquals(result, expected);
    });