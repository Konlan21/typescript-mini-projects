"use strict";
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName() {
        return `${this.firstName}, ${this.lastName}`;
    }
    set fullName(fullName) {
        fullName = fullName;
    }
}
class Student extends Person {
    constructor(id, email, firstName, lastName, age) {
        super(firstName, lastName, age);
        this.id = id;
        this.email = email;
        this.age = age;
    }
    register() {
        console.log('Student is registering');
    }
}
let konlan = new Student(1, 'joe@domain.com', 'John', 'Smith', 1000);
console.log(konlan.email);
class Teacher extends Person {
    constructor(title, firstName, lastName) {
        super(firstName, lastName);
        this.title = title;
    }
    get fullName() {
        return `${this.title}, ${super.fullName}`;
    }
}
let john = new Teacher('professor', 'John', 'Doe');
console.log(john.fullName);
//# sourceMappingURL=index.js.map