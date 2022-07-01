"use strict";

class City{
    #name
    constructor(name){
        this.#name=name;
    }
    getName(){
        return this.#name;
    }
    setName(name){
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

    getName(){
        return this.#name;
    }
    setName(name){
        this.#name = name;
        return this;
    }

    getSurn(){
        return this.#surn;
    }
    setSurn(surn){
        this.#surn = surn;
        return this;
    }

    getSalary(){
        return this.#salary;
    }
    setSalary(salary){
        if(salary >= 0){
        this.#salary = salary;
        }else{
            throw new Error('salary is incorrect!')
        }
        return this;
    }

    getCity(){
        return this.#city;
    }
    setCity(city){
        this.#city = city;
        return this;
    }
}

class Emploee{

}

let city = new City('London')
let student = new Student('Regulus', 'Black', 15000, city);
console.log(student);
//alert(student.getName() +' ' + student.getSurn() + ' ' + student.getSalary() + ' ' + student.getCity().getName());

let students = [
    new Student('Regulus1', 'Black', 15000, city),
    new Student('Regulus2', 'Black', 15000, city),
    new Student('Regulus3', 'Black', 15000, city),
    new Student('Regulus4', 'Black', 15000, city),
    new Student('Regulus5', 'Black', 15000, city)
]

for (let i = 0; i < students.length; ++ i){
    console.log(students[i].getName() + '   hey hey hey');
}