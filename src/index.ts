class Person{
    constructor(private firstName: string, private lastName: string, public age?: number){
    }

    get fullName(){
        return `${this.firstName}, ${this.lastName}`
    }

    set fullName(fullName){
        fullName = fullName
    }
}

class Student extends Person {
    constructor(public id: number, public email: string, firstName: string,  lastName: string, public age: number) {
        super(firstName, lastName, age)
    }

    register(){
        console.log('Student is registering')
    }
}

let konlan = new Student(1, 'joe@domain.com', 'John', 'Smith', 1000);

console.log(konlan.email)


class Teacher extends Person{
    constructor(public title: string, firstName: string, lastName: string){
        super(firstName, lastName)
    }

    override get fullName(): string {
        return `${this.title}, ${super.fullName}` 
    }
}

let john = new Teacher('professor', 'John', 'Doe')

console.log(john.fullName)