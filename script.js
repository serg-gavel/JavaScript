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
//Object constructor
var apple  = new Object();
apple.color = 'green';
apple.shape = 'round';

apple.describe = function () {
    return 'An apple is the color '+this.color+' and is ' +
        'the shape is '+this.shape;
};
console.log(apple.describe());