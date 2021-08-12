//task 1 for 
let ar = [2, 3, 4, 5];
let res = 1;

for (let i = 0; i < ar.length; i++)
{
	res *= ar[i];
}
console.log(res);

//task 1 while 
let ar = [2, 3, 4, 5];
let res = 1;
let i = 0;

while (i < ar.length)
{
	res *= ar[i];
	i++;
}
console.log(res);

//task 2
for (let i = 0; i <= 15; i++)
{
	if (i % 2 === 0)
	{
		document.write(i + ' is even' + '<br>');
	}
	else
	{
		document.write(i + ' is odd' + '<br>');
	}
}

//task 3
function randArray(k)
{
	const arr = [];
	while (arr.length < k)
	{
		let rand = Math.floor(Math.random() * 500) + 1;
		if (arr.indexOf(rand) === -1) arr.push(rand);
	}
	console.log(arr);
}

//task 4 
function raiseToDegree(a, b)
{
	a = +prompt('Enter a number will be raised to degree', 0);
	b = +prompt('Enter a number of degree', 0);

	if (Number.isInteger(a) && Number.isInteger(b))
	{
		return a ** b;
	}
	else
	{
		console.log('Number should be integer');
	}
}

//task 5

function findMin()
{
	let arg = Array.prototype.slice.call(arguments);
	arg.sort();

	return arg[0];
}

//task 6
function findUnique(arr)
{
	const uniqueCollection = new Set(arr);

	if (arr.length == uniqueCollection.size)
	{
		return true;
	}
	else
	{
		return false;
	}

}

//task 7
function lastElem(arr, x)
{

	const reverseArr = arr.reverse();
	const finArr = [];
	const revFinArr = finArr.reverse();

	if (x > 0 && x < arr.length)
	{
		for (let i = 0; i < x; i++)
		{
			finArr.push(reverseArr[i]);
		}
		console.log(revFinArr);
	}

	else if (x >= arr.length)
	{
		let bigArr = arr.reverse();
		console.log(bigArr);
	}

	else
	{
		console.log(reverseArr[0]);
	}

}

//task 8
function upperCase(str)
{
	const arr = str.split(' ');

	for (let i = 0; i < arr.length; i++)
	{
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}

	const strEnd = arr.join(' ');
	console.log(strEnd);

}
