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