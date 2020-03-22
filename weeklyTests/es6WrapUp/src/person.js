module.exports = class User {
    constructor(name, age, email) {

        this.Name = name;
        this.Age = age;
        this.Email = email;

    }

    sayHello() {
        console.log('Hey ' + this.Name + ', How are you doing?')
    }
}