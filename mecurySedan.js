const VehicleModule = require("./vehicle").Vehicle;

class Car extends VehicleModule {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maxPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maxSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
  }

  checkService() {
    if (this.mileage > 30000) {
      this.scheduleService = true;
      return this.scheduleService;
    }
  }

  start() {
    if (this.fuel > 0) {
      console.log("engine has started.");
      return (this.started = true);
    } else {
      console.log("no fuel");
      return (this.started = false);
    }
  }

  loadPassenger(num) {
    if (this.passenger < this.maxPassengers) {
      if (num + this.passenger <= this.maxPassengers) {
        this.passenger = num;
        return this.passenger;
      } else {
        console.log(
          this.model +
            " " +
            this.make +
            " not have enough space to take all passengers."
        );
      }
    } else {
      console.log(this.model + " " + this.make + " is full");
    }
  }
}

let mySuburu = new Car("suburu", "sedan", "2014", "black", 25000);

mySuburu.start();
mySuburu.loadPassenger(2);
mySuburu.stop();
mySuburu.checkService();

console.log(mySuburu);
