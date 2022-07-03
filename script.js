"use strict";

class City{
    #name
    constructor(name){
        this.#name=name;
    }
    get Name(){
        return this.#name;
    }
    set Name(name){
        this.#name = name;
        return this;
    }
}

class Student{
    #name;
    #surn;
    #salary;
    #city
    constructor(name, surn, salary, city){
        this.#name=name;
        this.#surn=surn;
        this.#salary = salary;
        this.#city = city;
    }

    get Name(){
        return this.#name;
    }
    set Name(name){
        this.#name = name;
        return this;
    }

    get Surn(){
        return this.#surn;
    }
    set Surn(surn){
        this.#surn = surn;
        return this;
    }

    get Salary(){
        return this.#salary;
    }
    set Salary(salary){
        if(salary >= 0){
        this.#salary = salary;
        }else{
            throw new Error('salary is incorrect!')
        }
        return this;
    }

    get City(){
        return this.#city;
    }
    set City(city){
        this.#city = city;
        return this;
    }
}

class Emploee{

}

let city = new City('London')
let student = new Student('Regulus', 'Black', 15000, city);
console.log(student);
//alert(student.Name +' ' + student.Surn + ' ' + student.Salary + ' ' + student.City.Name);

let students = [
    new Student('Regulus', 'Black', 15000, city),
    new Student('Regulus', 'Black', 15000, city),
    new Student('Regulus', 'Black', 15000, city),
    new Student('Regulus', 'Black', 15000, city),
    new Student('Regulus', 'Black', 15000, city)
]

for (let i = 0; i < students.length; ++ i){
    console.log('Iteration ' + i + ') ' + students[i].Name + (i+2) +'   hey hey hey');
}

console.log(student.City.Name);