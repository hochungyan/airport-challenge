Airport Challenge
=================
```
• About the Project
This project helps us to build up understanding for different concepts, such as Domain Modelling, Testing, Testing Frameworks, Test Driven Development and we continue to develop our javascript skills. 
This project is completed around 2nd week of our training.

•Built With
-Using Github 
-Javascript
-Domain model
-User story

•Problem Statements
-We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  

•Project Review and Roadmap
The main takeaways from this project is to use Github in a professional manner, learning how to write user story and unit test and gain a deeper understanding in js when we create different classes and constructors. If I can re-do the Project again, I probably would have use jasmine testing framework to write unit Test and also finish off the extended Acceptance Criteria.
```
         ______
        __\____\___
=  = ==(____DFA____)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

```

Instructions
---------

* Feel free to use google, your notes, books, etc. but work on your own.
* Keep it SIMPLE - it's not nearly as complicated as it first may look.
* You must [submit your challenge](https://airtable.com/shrUGm2T8TYCFAmjN) by the deadline, wherever you get to.
* Use your own test framework and evidence your test-driven development by committing on passing tests.
* Please write your own README detailing how to install your project, how to run the tests, how you approached the problem and provide screenshots of interacting with your program.
* If you refer to the solution of another coach or student, please put a link to that in your README.
* Please create separate files for every class, module, and spec.

Steps
-------

1. Fork this repo, and clone to your local machine
2. `npm install` to install project dependencies
3. Convert stories into a representative domain model and test-drive your work.
4. Run your tests using `npm test` or `node specRunner.js`
5. OPTIONAL: [Lint](https://eslint.org/docs/user-guide/getting-started) your source code using `npx eslint src`.
•Problem Statements
Task
-----

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:

#### Acceptance Criteria
```
Test 1
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```
| Object | Properties                     | Message      | Output   |
| ------ | ----------------------         | ----------   | ------   |
| Airport | planesAtAirport@Array[@plane] | land(@airplane) | @void    |
| | | checkIfPlaneIsLanded | @boolean    |
1. There are 2 ways to solve this test. We can either use inlcude to check is the plane in the array which is airport.planesAtAirport.includes((airplane1)) or airport.planesAtAirport.length. However, using the length method is better in this case because the plane might already exist in the array before we use this code, ie: a very old plane which is in the airport for years.
```
Test 2
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be adjusted if needed

```
| Object | Properties                     | Message                           | Output   |
| ------ | ----------------------         | ----------                        | ------   |
| Airport | capacity[@2]                  | setCapacity(newCapacity @integer) | @void    |

1. We set the inital Airport capacity to be 2 then we change the capacity to 3 and use the method test.assertEquals(result, 3) to check is the airport capacity has be changed to 3.
```
Test 3
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```
| Object  | Properties                    | Message           | Output   |
| ------  | ----------------------        | ----------        | ------   |
| Airport | planes@Array   |              | @boolean          |          |
|         |                               |                   | @string  |
1. The capacity of the airport is 2. so when we land the third plane into the airport. We can add if-else method in the land method to return a string "Sorry, The airport is full".
```
Test 4
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```
| Object  | Properties            | Message                          | Output   |
| ------  | ----------------------| ----------                       | ------   |
| Airport | planesAtAirport@Array | takeOff(@airplane)               | @void    |
|         |                       | CheckisAirplaneNoLongerAtAirport | @boolean |
1. First we land a plane then instruct it to take off then we can check whether the plane is still in the planesAtAiport array by having a if else statement in the takeoff method. it should return a string "Plane is no longer at the airport" then we can use assert.equal to check is the return string same as the expected string. 
2. However, I have changed it slightly, I will use test.assertEquals(result.includes(Plane), false) instead;
```
Test 5
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```
| Object  | Properties                    | Message           | Output   |
| ------  | ----------------------        | ----------        | ------   |
| Airport | planesAtAirport@Array[@plane] | takeOff(@airplane)| @string  |
| Airport | planesAtAirport@Array[@plane] | land(@airplane)   | @string  |
1. we will need to write 2 tests here. One to prevent the airport to let planes takeoff which are not at the airport and the second test will check is the plane already landed
2. I feel like Test 4 and Test 5A can be the same Test. However, I will change Test 4 slightly so it wont be the same.
#### Extended Acceptance Criteria
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```

Your task is to test drive the creation of a set of classes/objects to satisfy all the above user stories. You will need to use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy). In your tests, you'll need to stub random behaviour to ensure consistent test behaviour.

Your code should defend against [edge cases](http://programmers.stackexchange.com/questions/125587/what-are-the-difference-between-an-edge-case-a-corner-case-a-base-case-and-a-b) such as inconsistent states of the system ensuring that planes can only take off from airports they are in; planes that are already flying cannot take off and/or be in an airport; planes that are landed cannot land again and must be in an airport, etc.

## Domain Model
|  Object  |  Properties  |  Message   | Context  | Output        | Done?
|----------|--------------|------------|----------|---------------|--------
| Airport   | planesAtAirport @Array[planes] | land(plane) | not full | @void |  ✅ 
| | | | confirm plane is landed | Boolean @true |  ✅   
| | capacity[@2] initial | setCapacity(newCapacity @integer) | Can the Airport capacity be changed | Boolean @true | ✅  
| | |  | is full | @String "Sorry, The airport is full" | ✅ 
| | | isFull() | is full | Boolean @true | ✅ 
| | planesAtAirport@Array[@planes]| takeOff(@airplane)| not empty | @void |
| | |  | plane already take off | @String "Plane is no longer at the airport" | ✅ 
| | | |CheckisAirplaneStillAtAiportAfterTakeOff | Boolean @false |✅
| | | |CheckisPlaneLandedAlready | @String "This plane is already at the airport" |✅