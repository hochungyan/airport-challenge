class Airport {
    // here's a starting point for you
 
capacity;
planesAtAirport;

constructor(capacity=2)
{
    this.capacity = capacity;
    this.planesAtAirport = [];
   }
    land = airplane =>
    {
    if(this.isFull())
    {
      return "Sorry, The airport is full"
    }
    else if(this.planesAtAirport.includes(airplane))
    {
        return "This plane is already at the airport"
    }
    else {
        this.planesAtAirport.push(airplane);
        return this.planesAtAirport;
    };
   
   }
   takeOff = airplane =>
   {
       if(this.planesAtAirport.includes(airplane))
       {
            return this.planesAtAirport.pop(airplane);
       }
       else
       {
            return "Plane is no longer at the airport";
       };
   }
setCapacity(newCapacity) {

    this.capacity=newCapacity;

   }
   isFull(){
    return this.planesAtAirport.length >= this.capacity;
   }
}

module.exports = Airport;
