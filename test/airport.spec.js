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
test.it('Capacity of the Airport can be adjusted if required', function() {
    // setup
    let airport = new Airport();
    expected = 3;
   airport.setCapacity(3);
    // execute
      result = airport.capacity
    // verify
      test.assertEquals(result, expected);
    });

    // Test 3 - Check is the airport full or not
   console.log(`============================`);
   console.log(`Test 3 - Airport#land()`);
   
   //
   test.it('plane cannot land if airport is full', function() {
       // setup
       let airport = new Airport();
       let airplane1 =new Airplane(1);
       airport.land(airplane1);
       airport.land(airplane1);
       expected = "Sorry, The airport is full";
        // execute
       result= airport.land(airplane1);      
       // verify
         test.assertEquals(result, expected);
       });