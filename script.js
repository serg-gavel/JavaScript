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
var melon = new Fruit('melon', 'green', 'round');
console.log(melon);

