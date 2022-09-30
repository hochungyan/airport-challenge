const { assertEquals } = require('./testing-framework');
const Airport = require("../src/airport");

let expected;
let actual;
let result;
let airplane1;
let airport;

// Test 1 - is anything added to the basket?

console.log(`============================`);
console.log(`Test 1 - makes sure plane is not already landed at the airport`);

//Arrange
airport = new Airport();
airplane1 = {id: '1'};
expected = 'This plane is already landed at the airport';

//Act
//Adding the first plane first
airport.land(airplane1);

//Adding the same plane again and expect it to return an error message
actual = airport.land(airplane1);
result = assertEquals(actual,expected);
console.log(result);
