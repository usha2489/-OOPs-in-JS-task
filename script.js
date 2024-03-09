//Write a “person” class to hold all the details.

class Person{
    constructor(firstname,lastname,Dob,location)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.Dob = Dob;
        this.location = location;
    }
}
var person1 = new Person("usha", "rani", "06-05-1989" , "mysore");
var person2 = new Person("rani", "sunder", "06-05-1990" , "cbanglore");
var person3 = new Person("ranjita", "sandesh", "08-08-1991" , "Mandaya");
var person4 = new Person("ravinder", "sekar", "08-08-1992" , "hubbli");
var person5 = new Person("sanjay", "ravinder", "08-07-1994" , "karwar");

console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.Dob);
console.log(person1.location);

console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.Dob);
console.log(person2.location);

console.log(person3.firstname);
console.log(person3.lastname);
console.log(person3.Dob);
console.log(person3.location);

console.log(person4.firstname);
console.log(person4.lastname);
console.log(person4.Dob);
console.log(person4.location);

console.log(person5.firstname);
console.log(person5.lastname);
console.log(person5.Dob);
console.log(person5.location);


console.log(`All the Person Names are "person1" : ${person1.firstname}
"person2":${person2.firstname}
"person3":${person3.firstname}
"person4":${person4.firstname}
"person5":${person5.firstname}`)


//write a class to calculate the uber price.

class UberPriceCalculator {
    constructor() {
      this.baseFare = 80;
      this.costPerKilometer = 10;
      this.costPerMinute = 4.0;
      this.bookingFee = 25;
    }
  
    calculatePrice(distanceInKilometers, timeInMinutes) {
      
      const distanceCost = this.costPerKilometer * distanceInKilometers;
      const timeCost = this.costPerMinute * timeInMinutes;
  
    
      const totalPrice = this.baseFare + distanceCost + timeCost + this.bookingFee;
  
      return totalPrice;
    }
  }
  
  const calculator = new UberPriceCalculator();
  const distanceInKilometers = 10.0; 
  const timeInMinutes = 10; 
  
  const estimatedPriceINR = calculator.calculatePrice(distanceInKilometers, timeInMinutes);
  console.log(`Estimated Uber price in INR: ₹${estimatedPriceINR}`)