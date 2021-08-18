// task 1
function propsCount(currentObject) {
    let count = 0;
    for (let properties in currentObject) {
        count += 1;
    }
    console.log(count);
}

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};

propsCount(mentor); // 3

//task 2

function showProps(obj) {
    let objProp = [];
    let objVal = [];
    for (let properties in obj) {

        objProp.push(properties);
        objVal.push(obj[properties]);

    }
    console.log('Array of object properties: ' + objProp);
    console.log('Array of properties values: ' + objVal);
}

let student = {
    course: 'Computer science',
    year: 4,
    subject: 'Artificial Intelligence',
    teacher: 'Kushnir Oleksandr',
    bestGrade: 5
}
showProps(student);

// task 3

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    ShowFullName() {
        alert(this.name + ' ' + this.surname);
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(midleName) {
        alert(this.name + ' ' + this.surname + ' ' + midleName);
    }
    showCourse() {
        let date = new Date();
        date.setFullYear(date.getFullYear() - this.year);

        if (date.getFullYear() > 6) {
            alert('You have graduated');
        } else if (this.year > 2021 || this.year == null) {
            alert('Year is incorrect');
        } else {
            alert('Current course: ' + date.getFullYear());
        }
    }
}
let stud1 = new Student("Petro", "Petrenko", 2017);
stud1.showFullName("Petrovych");
stud1.showCourse();

// task 4
class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSalary() {
        let salary = this.dayRate * this.workingDays;
        return salary;
    }
    #experience = 1.2;
    showSalaryWithExperience() {
        return this.showSalary() * this.#experience;
    }

    get showExperience() {
        return this.#experience;
    }

    set setExperience(num) {
        if (num < 0)
            alert('Incorrect data');
        this.#experience = num;

    }

}



let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
console.log(worker1.fullName + ' first salary: ' + worker1.showSalary());
console.log(worker1.fullName + ' salary with 1.2 experience:  ' + worker1.showSalaryWithExperience())
worker1.setExperience = 1.5;
console.log("Experience: " + worker1.showExperience);
console.log(worker1.fullName + ' current salary: ' + worker1.showSalaryWithExperience());

let worker2 = new Worker("Tom Jerry", 37, 17);
console.log(worker2.fullName);
console.log(worker2.fullName + ' first salary: ' + worker2.showSalary());
console.log(worker2.fullName + ' salary with 1.2 experience:  ' + worker2.showSalaryWithExperience())
worker2.setExperience = 1.7;
console.log("Experience: " + worker2.showExperience);
console.log(worker2.fullName + ' current salary: ' + worker2.showSalaryWithExperience());

let worker3 = new Worker("Max Morring", 15, 27);
console.log(worker3.fullName);
console.log(worker3.fullName + ' first salary: ' + worker3.showSalary());
console.log(worker3.fullName + ' salary with 1.2 experience:  ' + worker3.showSalaryWithExperience())
worker3.setExperience = 1.3;
console.log("Experience: " + worker3.showExperience);
console.log(worker3.fullName + ' current salary: ' + worker3.showSalaryWithExperience());

let worker4 = new Worker("Joseph Davidson", 40, 15);
console.log(worker4.fullName);
console.log(worker4.fullName + ' first salary: ' + worker4.showSalary());
console.log(worker4.fullName + ' salary with 1.2 experience:  ' + worker4.showSalaryWithExperience())
worker4.setExperience = 1.9;
console.log("Experience: " + worker4.showExperience);
console.log(worker4.fullName + ' current salary: ' + worker4.showSalaryWithExperience());

function createArr(arr) {
    let arrOfSalary = [];
    for (let i in arr) {
        let salary = arr[i].workingDays * arr[i].dayRate * arr[i].showExperience;
        console.log(arr[i].fullName + ": " + salary.toFixed(2));
        arrOfSalary.push([i, arr[i]]);
    }
}
createArr([worker1, worker2, worker3, worker4].sort((prev, next) => prev.workingDays * prev.dayRate * prev.showExperience - next.workingDays * next.dayRate * next.showExperience));


// task 5

class GeometricFigure {
    constructor(a) {
        this.a = a;
    }
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}
class Triangle extends GeometricFigure {
    constructor(a, b) {
        super(a);
        this.b = b;
    }
    getArea() {
        let sTriangle = (this.a * this.b) / 2;
        return (sTriangle);
    }
}
class Square extends GeometricFigure {
    constructor(a) {
        super(a);
    }
    getArea() {
        let sSquare = this.a * this.a;
        return (sSquare);
    }
}
class Circle extends GeometricFigure {
    constructor(a) {
        super(a);
    }
    getArea() {
        let sCircle = Math.PI * this.a * this.a;
        return (sCircle);
    }
}

function handleFigures(figures) {
    for (let i in figures) {
        if (figures[i] instanceof GeometricFigure) {
            console.log(figures[i] + " - area: " + figures[i].getArea());
        }
    }
    let areaArr = [];
    for (let n in figures) {
        areaArr.push(figures[n].getArea());
    }
    console.log("Total area: " + areaArr.reduce((total, amount) => total + amount));
}

console.log(handleFigures([new Triangle(4, 5), new Square(7), new Circle(5)]));
