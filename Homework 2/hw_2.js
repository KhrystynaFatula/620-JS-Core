//task 1

let x = 1;
let y = 2;

let res1 = x + '' + y + '';
console.log(res1); 
console.log(typeof res1); 

let res2 = Boolean(x) + String(y);
console.log(res2); 
console.log(typeof res2); 

let res3 = Boolean(x, y);
console.log(res3); 
console.log(typeof res3); 

let res4 = (x + y)/'a';
console.log(res4);
console.log(typeof res4);

//task 2

let num = prompt('Enter a number', ' ');

if (num > 0 && (num % 2 == 0) ){
    console.log('This is even number')
}
else if (num % 7 == 0){
    console.log('This number is a multiple of 7 ')
}
else{
    console.log('No suitable conditions')
}

//task 3

let list = [1, 'line', true, null];
console.log(list.length);

let person = prompt('Enter some value', ' ');
list[4] = person;
console.log(list[4]);

list.shift();
console.log(list);

//task 4

let cities = ["Rome", "Lviv", "Warsaw"]; 
console.log(cities.join('*'));

//task 5

let isAdult = prompt('How old are you', ' ');

if (isAdult >= 18){
    console.log('You are of the full legal age');
}
else if (isAdult <= 10){
    console.log('You are too young');
}
else if(isAdult >= 14 && isAdult < 18){
    console.log('You are a student of a high school');
}
else if( isAdult > 10 && isAdult < 14){
    console.log('You study at school');
}
//task 6

let a = prompt('Enter lenght of a side A', '');
let b = prompt('Enter lenght of a side B', '');
let c = prompt('Enter lenght of a side C', '');

if (isNaN(a) || isNaN(b) || isNaN(c)){
    console.log('Incorrect data');
}
else{
let p;
p = (+a + +b + +c)/2;
let s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log('Square of triangle = ' + s.toFixed(3));
}

if ( a*a + b*b == c*c ) {
    console.log('This is right triangle');
} 
else {
    console.log('This is NOT right triangle');
}

