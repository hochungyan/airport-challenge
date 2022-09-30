class Airport {
    // here's a starting point for you
capacity;
planesAtAirport;

constructor(capacity)
{
    this.capacity = 2;
    this.planesAtAirport = [];
}
land = plane =>
{
    if(this.isFull())
    {
      return "Sorry, The airport is full"
    }
    else if(this.planesAtAirport.includes(plane))
    {
        return "This plane is already at the airport"
    }
    else {
        this.planesAtAirport.push(plane);
        return this.planesAtAirport;
    }

}
setCapacity(newCapacity) {

    this.capacity=newCapacity;

}
isFull()
{
    return this.planesAtAirport.length >= this.capacity;
}

}

module.exports = Airport;
