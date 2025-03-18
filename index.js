function Auto(name, maxSpeed, speed) {
  this.name = name;
  this.maxSpeed = maxSpeed;
  this.speed = 0;

  this.accelerate = function (accelValue) {
    this.speed = this.speed + accelValue;
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    return this.speed;
  };
  this.deaccelerate = function (deaccelValue) {
    this.speed = this.speed - deaccelValue;
    if (this.speed < 0) {
      this.speed = 0;
    }
    return this.speed;
  };
  this.stop = function(){
    this.speed = 0;
  }
  return this.speed
}
const auto1 = new Auto('Mercedes',303)
