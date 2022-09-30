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
    if(this.planesAtAirport.includes(plane))
    {
        return "This plane is already landed at the airport"
    }
    else {
        this.planesAtAirport.push(plane);
        return this.planesAtAirport;
    }

}
setCapacity(newCapacity) {

    this.capacity=newCapacity;

}


}

module.exports = Airport;
