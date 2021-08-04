// task 2 
console.log('Fatula');

//task 3
let a = 10;
let b = 78;
document.write('Numbers: ', a, ', ', b, '\n');
document.write('<br>');

a = b;
document.write('Copied numbers: ', a, ', ', b);

//task 4
let nicolas = {
	occupation: 'teacher',
	age: 34,
	isEmployed: true,
	children: undefined,
	pets: null
};

//task 5
let isAge = confirm('Are you 18 years old?');
console.log(isAge);

// task 6
let myName = 'Khrystyna';
let lastName = 'Fatula';
let group = '620 JS';
let birthYear = 2000;
let maritalStatus = true;

console.log(birthYear);
console.log(maritalStatus);
console.log(myName);
console.log(lastName);
console.log(group);

let nullValue = null;
let undefValue = undefined;

console.log(typeof nullValue);
console.log(typeof undefValue);

//task 7
let log = prompt('Enter your login', 'User');
let mail = prompt('Enter your email', 'usermale@gmail.com');
let pass = prompt('Enter your password', 'qwerty');

document.write('Dear ', log, ' , your email is ', mail, ', your password is qwerty', pass);

//task 8
let sec = 60;
let hour = 60;
let day = 24;
let month = 31;

let secHour = sec * hour;
let secDay = secHour * day;
let secMonth = secDay * month;

document.write('Number of seconds in an HOUR: ', secHour);
document.write('<br>');
document.write('Number of seconds in a DAY: ', secDay);
document.write('<br>');
document.write('Number of seconds in a MONTH: ', secMonth);
