// task 1
function upperCase(str) {
	let regExp = /^[A-Z]\w/;
	if (regExp.test(str)) {
		console.log('String ' + str + ' starts with uppercase character');
	} else {
		console.log('String ' + str + ' doesn`t start with uppercase character');
	};

}
upperCase('regexp');
upperCase('RegExp');


// task 2 
function checkEmail(str) {
	let regExp = /\w+@\w+\.\w{3}$/g;
	console.log(regExp.test(str));
}
checkEmail("Qmail2@gmail.com");
checkEmail("HelloNickgmail.gram");
checkEmail("Fasanta2@gmailcom");


// task 3
console.log(/d{1}(b+)(d{1})/gi.exec("cdbBdbsbz"));


// task 4 
console.log("Java Script".replace(/(\w+)\s(\w+)/, '$2, $1'));


//task 5
function cardValidation(cardNum) {
	if (/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(cardNum))
		alert('Card number `' + cardNum + '` is CORRECT');
	else
		alert('Card number `' + cardNum + '` is INCORRECT');
}
cardValidation('9999-9999-9999-9999');
cardValidation('99999-9999-9999-9999');
cardValidation('9999-9999-9999--9999');
cardValidation('9999-9999-9999-99999999');


// task 6
function checkEmail(email) {
	if (/^\w+([\.-]?\w+)*@[A-Z0-9.-]+\.[A-Z]{2,}\b/i.test(email))
		alert('Email ' + email + ' is CORRECT');
	else
		alert('Email ' + email + ' is INCORRECT');
}
checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');
checkEmail('my_ma--il@gmail.com');


// task 7
function checkNumb(login) {
	floatRefExp = /\d+\.\d+/g;
	numbRefExp = /\d*\.\d+|\d+/g;
	let arrOfFloat = login.match(floatRefExp);
	let arrOfNumb = login.match(numbRefExp);
	console.log(arrOfNumb);
	if (arrOfFloat == null) {
		return login;
	} else if (arrOfFloat != null) {
		let nonFloatArr = login.replace(floatRefExp, "0");
		return nonFloatArr;
	}
}

function checkLogin(myLogin) {
	regExp = /^[^ \d][a-zA-Z0-9]{1,9}$/g;
	if (regExp.test(myLogin)) {
		return true;
	} else return false;
}

let x = checkNumb('ee1.1ret3');
checkLogin(x);
let y = checkNumb('ee1*1ret3');
checkLogin(y);
