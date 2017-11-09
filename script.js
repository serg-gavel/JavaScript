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

var users = [
    {
        name: 'Neo',
        age: 30
    },
    {
        name: 'Trinity',
        age: 29
    },
    {
        name: 'Morpheus',
        age: 48
    }

];
console.log(users[1].name);

var selectBg = document.getElementById('background');

selectBg.addEventListener("change", changeBg);

// console.log(selectBg.value);
function changeBg() {
    var heading = document.getElementById('heading');
    heading.style.color = selectBg.value;
}


