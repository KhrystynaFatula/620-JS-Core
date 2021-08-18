// task 1 
function calcRectangleArea(width, height) {
    width = +prompt('Enter width', 0);
    height = +prompt('Enter height', 0);
    if (width < 0 || height < 0 || Number.isInteger(width) == false || Number.isInteger(height) == false) {
        throw new Error('Width and height of rectangle should be integer');
    }
    return ('Rectangle area = ' + width * height);
}

try {
    let result = calcRectangleArea();
    console.log(result);
} catch (exception) {
    console.log(exception.name);
    console.log(exception.message);
}

//task 2
function checkAge(age) {
    age = prompt('Enter your age', 18);
    if (age.length === 0 || age == 0) {
        throw new ReferenceError('Line is empty');
    } else if (Number.isInteger(+age) == false) {
        throw new TypeError('Type of your age should be integer');
    } else if (age < 14) {
        throw new RangeError('You are too small');
    }
    return alert('Enjoy your movie!');
}

try {
    checkAge();
} catch (exception) {
    console.log(exception.name);
    console.log(exception.message);
}

//task 3 

class MonthException extends Error {
    constructor(message) {
        super(message);
        this.name = 'MonthException';
    }
}

function showMonthName(month) {
    let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (month > monthName.length || month < 0 || Number.isInteger(+month) == false) {
        throw new MonthException('Incorrect month number');
    }
    let i;
    i = month;
    return monthName[month - 1];
}

try {
    showMonthName(12);
} catch (exception) {
    let monthException = new MonthException;
    console.log(monthException.name + '. ' + exception.message);
}

// task 4 
function showUser(id) {
    let objId = {
        id
    };
    if (id < 0) {
        throw new Error('Id must not be negative: ' + id);
    } else return objId;
}

function showUsers(ids) {
    let arrFin = [];

    for (let i = 0; i <= ids.length - 1; i++) {
        try {
            if (showUser(ids[i] > 0))
                arrFin.push(showUser(ids[i]));

        } catch (exception) {
            console.log(exception.name + ':' + exception.message);
        }

    }
    console.log(arrFin);
}

showUsers([7, -12, 44, 22]);
//Error: ID must not be negative: -12
//[ {id: 7}, {id: 44}, {id: 22} ]
