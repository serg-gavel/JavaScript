//Object literal
var person = {
    firstName : 'Sergey',
    lastName : 'Gavel',
    age : 28,
    children : ['Chris','Katheryn'],
    address : {
        street: '1325 Something st.',
        city: 'Los Angeles',
        state: 'CA'
    },
    fullName : function () {
        return this.firstName +' '+this.lastName;
    }
};
console.log(person.fullName());


//Constructor pattern
function Fruit(name, color, shape) {
    this.name = name;
    this.color = color;
    this.shape = shape;

}

var apple = new Fruit('apple', 'red', 'round');
console.log(apple);

function Car(carName, carClass, carEngine, yearBuilt){
    this.carName=carName;
    this.carClass=carClass;
    this.carEngine=carEngine;
    this.yearBuilt=yearBuilt;
}
var myCar = new Car('Volkswagen Passat CC','E-class','2.0 L TDI I4','2017');
console.log(myCar);
