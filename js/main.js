function stringWork () {
		var str = document.getElementById('head').innerHTML;
		////////////////////////////////////////////////////

		// new String()
		// String()

		// var result = typeof String(str)
		// var result = str.charAt(10) 

		// charAt() - видає букву під номером
		// var result = str[10]

		// charCodeAt() - видає код букви під номером
		// var result = str.charCodeAt(10)

		// concat() - добавляє до строки
		// var result = str.concat(' Hello', ' World', '!!!')
		// var result = str + ' Hello' + ' World' + '!!!'

		// fromCharCode() - Складає строку з символів
		// var result = String.fromCharCode(str.charCodeAt(10),str.charCodeAt(9))

		// indexOf() - виконує пошук в строці/ і повертає номер першого символу строки
										// а інакше поввертає -1 
										// другий аргумент з якої позиції пошук
		// var result = str.indexOf('amet', 21)
		// var result = str.lastIndexOf() - пошук з кінця

		// slice() повертає строку в межах. перший включно. 2 аргумент не включно
		// var result = str.slice(6,10)

		// split() - розбиває строку на масим строк 1) аргумент розділювач 2 арг скільки ячейок в масиві
		// var result = str.split(' ',2)

		// substr(1,2) - повертає кусок строки з арг1 в кількость арг2
		// var result = str.substr(1,2)
		// var result = str.substring(1,3) - арг2 до якого символа (не включно)

		// var result = str.toLocaleLowerCase()
		// var result = str.toLocaleUpperCase()
		// var result = str.toUpperCase()
		// var result = str.toLowerCase()

			//________________ Математические преобразования 

		// var result = Math.abs(-10) // 10
		// var result = Math.acos(-1) // 3.141592653589793

		// var result = Math.ceil(3.6) // Заукруглює до ближжай	шого верхнього
		// var result = Math.ceil(-3.6) //-3

		// var result = Math.floor(3.6) // 3 Заукруглює до ближжай	шого нижнього
		// var result = Math.floor(-3.6) // -4

		// var result = Math.max(3.6, 4,5.2,5) // повертає найбільший аргумент з списку
		// var result = Math.min(3.6, 4,5.2,5) // повертає найменший аргумент з списку
		
		// var result = Math.pow(2,3) // до степеня

		// var result = Math.random() // від 0.0 до 1.0
		// var result = Math.floor(Math.random() * 100) // від 1 до 100

		// var result = Math.sqrt(25) // 5 квадратний корінь

		var numb = 10.6

		// var result = numb.toFixed(3) // 10.600
		// var result = numb.toPrecision(3) // 10.6
		// var result = numb.toPrecision(2) // 11

		// var result = parseFloat('10.23Hello World') // 10.23 перебирає і находить перше число в строці
		var result = parseInt('10.23Hello World') // 10 перебирає строку в ціле число
		
		////////////////////////////////////////////////////
		document.getElementById('result').innerHTML = result;
	}


window.onload = function (){

	stringWork()


	// function ucFirst (str) {
	// 	return str[0].toUpperCase() + str.slice(1)
	// }
	// console.log(ucFirst('duru'))

	// var n = 12.123456
	// console.log(+n.toFixed(3) + 3)

	// var a = +prompt('Number 1','')
	// var b = +prompt('Number 2', '')

	// alert(a + b)

	// class User {

	//   constructor(name) {
	//     this.name = name;
	//   }

	//   sayHi() {
	//     alert(this.name);
	//   }

	// }

	// let user = new User("Вася");
	// user.sayHi(); // Вася

	// var arr1 = [1,2,3,11,10,7,2,2,8]
	// var arr2 = 2

	// var res = arr1.filter(function (v,i,a) {
	// 	return v > 3 && v < 10
	// })
	// console.log(res)

	// var arr = ["test", 2, 1.5, false]

	// function find(arr, value) {
	// 	for (var i = 0; i < arr.length; i++) {
	// 		if (arr[i] === value) {
	// 			return i
	// 		}
	// 		return -1
	// 	}
	// }
	// console.log(arr.indexOf(1.5))

	// var rand = Math.floor(Math.random() * arr1.length)
	// console.log(arr1[rand])

	// var arr3 = ['Джаз', 'Блюз']
	// arr3[arr3.length] = 'Рок-н-Ролл'
	// arr3.splice(arr3.length - 2, 1, 'Классика') // arr3[arr3.length - 2] = 'Классика'
	// console.log(arr3.shift())
	// console.log(arr3)
	// arr3.unshift('Рэп', 'Регги')
	// console.log(arr3)

	// arr1.push('Компьютер')
	// arr1[arr1.length] = 'jaerbi'
	// console.log(arr1)

	// function lastElement (a) {
	// 	var res = a.length - 1
	// 	return a[res]
	// }
	// console.log(arr1[arr1.length - 1])
	// console.log(lastElement(arr1))


	// for in - цикл де key (індех, або імя свойства)
	// arr1['hello'] = 'world' // (свойство => значення)
	// for (var key in arr1) {
	// 	console.log(key + ' => ' + arr1[key])
	// }

	// indexOf - шукає в масиві елемент з вказаним значення і поветає його індех, або -1 якщо немає (з початку масиму)
	// console.log(arr1.indexOf(2))
	// lastIndexOf - (з кінця масиву)
	// console.log(arr1.lastIndexOf(2))

	// reduceRight - від більших індексів до менших
	// reduce - обєднує масив, повертаре один елемент, приймає два параметра
	// 1) функція
	// 2) початкове значення
	// х - початкове значення або початок масиву, а потім накоплене значення 
	// у - поточна ячейка
	// var res = arr1.reduce(function (x,y) {
	// 	return x + y
	// }, 0)
	// console.log(res)


	// every - повертає true, якщо функція повертає тру для всіх елементів масиву
	// var res = arr1.every(function (v,i,a) {
	// 	return v < 5
	// })
	// console.log(res)

	// some - повертає true, якщо хочаб один повертає тру 
	// var res = arr1.some(function (v,i,a) {
	// 	return v < 5
	// })
	// console.log(res)

	// filter - повертає деякі елемент початкового масиву/ Функція має повертати true або false
	// var res = arr1.filter(function (v,i,a) {
	// 	return v < 5 && v > 2
	// })
	// console.log(res)

	// map - повертає масив значень . функція обовязково має вертати якесь 
															// значення. повертає новий масив не міняючи
	// var res = arr1.map(function (v,i,a) {
	// 	return v * v
	// })
	// console.log(res)

	// forEach - обходить елементи масиву для кожного визиває задану функцію
	// параметри
	// 1) v - значення елементу масиву
	// 2) i - індекс елементу масиву
	// 3) a - сам масив
	// arr1.forEach(function (v,i,a) {
	// 	a[i] = v + 10 + ' hello'
	// })
	// console.log(arr1)

	// delete - видаляє елемент з масивуб лишає пусту ячейку
	// delete arr1[1]
	// console.log(arr1)

	// shift - видаляє з початку і повертає видалений
	// arr1.shift()
	// console.log(arr1.shift())
	// console.log(arr1)

	// unshift - добавляє в початок масиву
	// arr1.unshift(30,40,50)
	// console.log(arr1)

	// pop - видаляє останній елемент масиву (повертає видалений)
	// arr1.pop()
	// arr1.pop()
	// console.log(arr1)

	// push - добавляє до масиву в кінець масиву
	// arr1.push(20,30,40,['text1','text2'])
	// console.log(arr1)

	// splice - робить вставку або видаляє елемент масиву, міняє масив (зщвертає видалений) 
	// параметри
	// 1) показує з якого індекса буде вставка чи видалення (включно)
	// 2) каже скільки елементів будуть вирізано з масиву (0 - нічого не удаляє)
	// 3) вписані елементи буду ть добавлені до масиву
	// arr1.splice(1,4,'hello','world')
	// console.log(arr1.splice(1,4,'hello','world'))
	// console.log(arr1)

	// slice - повертає фрагмент указаного масиву параметри початок(включнл), кінець(не включно)
	// console.log(arr1.slice(0,2))

	// concat - створює новий масив в якуму є елементи масива до якого використаний і переданих
	// var arr_res = arr1.concat(13,15,17)
	// var arr_res2 = arr_res.concat([14,16,18])
	// console.log(arr_res2)

	// sort - сортує і повертає відсортований масив. якщо без параметрів то поалфавіту
	// arr1.sort()
	// console.log(arr1)
	// arr1.sort(function(a,b) {
	// 	return b - a
	// })
	// console.log(arr1)

	// reverse - міняє і повертає перерозпреділений масив
	// arr1.reverse()
	// console.log(arr1)

	// join - Метод Обєднує всі елементи масиву в строки 
	// console.log(arr1.join(' - '))

	// if (Array.isArray(arr2)) {
	// 	console.log('true')
	// } else {
	// 	console.log('false')
	// }

	// if (23 in arr1) {
	// 	console.log('true')
	// } else {
	// 	console.log('false')
	// }

	//-------------------------------------------

	// var arr2 = new Array(2,3,45,63,31,43,67,78,23,455,34)

	// var arr3 = new Array(5)

	// arr3.push(1,2,3,41,12,13,42,5,6)

	// arr3[5] = 'hello'
	// arr3[100] = 100

	// var k = Object.keys(arr3)

	// for (var i = 0; i < k.length; i++) {
	// 	document.write(k[i] + ' => ' + arr3[k[i]] + '<br />')
	// }

	// console.log(k)

	//-------------------------------------------

	// var arr = [19,2,3,44,5,6,7,8,13,77,33]

	// function filterForUp (x) {
	// 	return x >= 10
	// }

	// console.log(arr.filter((x) => { return x >= 10 }))

	//-------------------------------------------

	// function fib(n) {
	// 	var a = 1, b = 1
	// 	for (var i = 3; i <= n; i++) {
	// 		c = a + b
	// 		a = b
	// 		b = c
	// 	}
	// 	return b
	// }

	// console.log(fib(7))

	// function fib(n) {
	// 	var a = 1, b = 1, c
	// 	for (var i = 3; i <= n; i++) {
	// 		c = a + b 
	// 		a = b
	// 		b = c
	// 	}
	// 	return b
	// }

	// console.log(fib(77))

	// function fact(n) {
	// 	if (n<=1) {
	// 		return 1
	// 	}

	// 	return n * (fact(n-1))
	// }

	// console.log(fact(5))

	// function sumTo(n) {
	// 	// if (n <= 1) {
	// 	// 	return 1
	// 	// }

	// 	// return n + sumTo(n-1)
	// 	var sum = 0
	// 	for (var i = 1; i <= n; i++) {
	// 		sum += i
	// 	}

	// 	return sum
 // 	}

	// console.log(sumTo(4))
	
//-------------------------------------------
	// var x = prompt('x?', '')
	// var n = prompt('n?', '')
	// function pow(x,n) {
	// 	var result = x
	// 	for (var i = 1; i < n; i++) {
	// 		result *= x
	// 	}
	// 	return result
	// }

	// if (n <= 1) {
	// 	alert('Степень ' + n +'не поддерживается, введите целую степень, большую 1')
	// } else {
	// 	console.log(pow(x,n))
	// }

	

	// function min(a,b) {
	// 	// if (a<b) {
	// 	// 	return a
	// 	// } else {
	// 	// 	return b
	// 	// }

	// 	return (a < b) ? a : b
	// }

	// console.log(min(10,6))

	// function checkAge (age) {
	// 	return (age > 18) ? true : confirm('Родители разрешили?')
	// }
	// function checkAge (age) {
	// 	return (age > 18) || confirm('Родители разрешили?')
	// }

	// console.log(checkAge(18))

//-------------------------------------------
	// var num
	// do {
	// 	num = prompt('Введите число больше 100?', 0)
	// } while (num <= 100 && num != null)

	// for (var i = 0; i < 3; i++) {
	//   console.log( "номер " + i + "!" )
	// }

	// var i = 0
	// while (i < 3) {
	// 	console.log( "номер " + i + "!" )
	// 	i++
	// }

	// for (var i = 2; i <= 10; i++) {
	// 	if (i % 2 !== 0) {
	// 		console.log(i)
	// 	}
	// }

	//-------------------------------------------

	// alert("" + 1 + 0) // "10"
	// alert("" - 1 + 0) // -1
	// alert(true + false) // true
	// alert(6 / "3" ) // 2
	// alert("2" * "3" ) // 6
	// alert(4 + 5 + "px") // 9px
	// alert("$" + 4 + 5) // $45
	// alert("4" - 2) // 2
	// alert("4px" - 2) // NaN
	// alert(7 / 0) // Infinity
	// alert("  -9\n" + 5) // -9 
													// 5
	// alert("  -9\n" - 5) // -14
	// alert(5 && 2) // 2
	// alert(2 && 5) // 5
	// alert(5 || 0) // 5
	// alert(0 || 5) // 5
	// alert(null + 1) // 1
	// alert(undefined + 1) // NaN
	// alert(null == "\n0\n") // false
	// alert(+null == +"\n0\n") // true

	//-------------------------------------------

	// var count = 0 

	// while (count < 10) {
	// 	console.log(count)
	// 	count++
	// }
	//-------------------------------------------

	// var age = 91
	// if ( age >= 18 && age <= 90 ) {
	// 	console.log(age + ' true')
	// } else {
	// 	console.log('false')
	// }

	//-------------------------------------------

	// var login = 'Директор'
	// var message = (login == 'Вася') ? 'Привет' :
	// 							(login == 'Директор') ? 'Здравствуйте' :
	// 							(login == '') ? 'Нет логина' :
	// 							''
	// alert(message)

	//-------------------------------------------
	// var result, a = 1, b = 1 
	// result = (a + b < 4) ? 'Мало' : 'Много';
	// alert(result)

	//-------------------------------------------

	// var userName = prompt('Enter You NAme', '')

	// if ( userName == 'Админ') {
	// 	var pasword = prompt('Password', '')
	// 	if (pasword == 'Чёрный Властелин') {
	// 		alert('Добро пожаловать!')
	// 	} else if (!pasword) {
	// 		alert('Вход отменён')
	// 	} else {
	// 		alert('Пароль неверен')
	// 	}
	// } else if (!userName) {
	// 	alert('Вход отменён')
	// } else {
	// 	alert('Я вас не знаю')
	// }

	//-------------------------------------------

	// var num = prompt('Enter Number', '0')

	// var message = (num > 0) ? (num + ' значение больше нуля') :
	// 							(num < 0) ? (num + ' значение меньше нуля') :
	// 							'значение равно нулю'

	// alert( message )

	//----------------------------------

	// var user = prompt('Каково «официальное» название JavaScript?', '')

	// if (user == 'ECMAScript') {
	// 	alert('Верно!')
	// } else {
	// 	alert('Не знаете? «ECMAScript»!')
	// }



	document.body.style.fontSize = '25px';
	
	// Блоки з мінянням кольору по кліку
	document.getElementById('one').addEventListener('click', 
		function (event) {
			this.style.backgroundColor = '#' + Math.ceil(Math.random()*Math.pow(10,6));
			alert(this.tagName);
		}, true);

	document.getElementById('two').addEventListener('click', 
		function (event) {
			this.style.backgroundColor = '#' + Math.ceil(Math.random()*Math.pow(10,6));
			alert(this.tagName);
			// event.stopPropagation();
	}, true);

	document.getElementById('tree').addEventListener('click', 
		function (event) {
			this.style.backgroundColor = '#' + Math.ceil(Math.random()*Math.pow(10,6));
			alert(this.tagName);
			// event.stopPropagation();
			// event.stopImmediatePropagation();
		}, true);

	//Клік для форми для родителя
	document.getElementById('myForm').addEventListener('click',
		function(event){
			event.target.style.border = '2px solid red'
		},false)

	//ПРоверка формы на заполнение полей
	function funcRequired(){
		var form = document.forms.myForm;
		var empty = false;

		for (var i = 0; i < form.length; i++){
			if(form.elements[i].type == "text" || form.elements[i].type == "password" ){
				if(form.elements[i].value == ""){
					form.elements[i].style.border = '2px solid red';
					empty = true;
				}
			}
		}

		if (empty){
			alert('Заполните пожалуйста поля');
		}else {
			document.forms[0].submit();
		}
	}
	var submite = document.getElementById('submite');
	submite.addEventListener("click",funcRequired,false);


	function funcOption(){
		var option = document.forms.myForm.elements.option;
		for (var i = 0; i < option.length; i++){
			if(option[i].checked) {
				console.log(option[i].value);
			}
		}
	}

	function submit(){
		document.forms[0].submit();
	}

	submite.addEventListener("click",funcOption,false);
	submite.addEventListener("click",submit,false);

	// Submit Button forms
	/*submite.onclick = function () {
		var option = document.forms.myForm.elements.option;
		for (var i = 0; i < option.length; i++){
			if(option[i].checked) {
				console.log(option[i].value);
			}
		}
	}

	/*submite.onclick = function () {
		document.forms[0].submit();
	}
	*/

	var b = document.getElementById('button');
	var t = document.getElementById('test');
	var b2 = document.getElementById('button2');
	var b3 = document.getElementById('button3');
	var b4 = document.getElementById('button4');
	var b5 = document.getElementById('button5');
	var b6 = document.getElementById('button6');
	var reinbow = Math.ceil(Math.random() * Math.pow(10,6));
	t.setAttribute('border', '3px solid red')
	t.removeAttribute('border')

	b.onclick = function () {
		t.style.color = '#'	+ Math.ceil(Math.random() * Math.pow(10,6));
	}	
	b2.onclick = function () {
		t.style.background = '#' + Math.ceil(Math.random() * Math.pow(10,6));
	 }

	b3.onclick = function (){
	 	alert('hello');
	 }

	 var h1 = document.querySelector('h1');

	h1.style.fontSize = '60px';
	// console.log(document.querySelector('#table').innerText)
	// <div><h3>Hello Jaerbi</h3><p>Just some text area dont worry about this text</p></div>

	//Створення додаткового блоку
	b4.onclick = function (){
		var newDiv = document.createElement('div');
		
		var newText = document.createTextNode('Just some text area dont worry about this text');
		var newComent = document.createComment('Just some COmMENT for this text');

		newDiv.appendChild(newText);
		document.querySelector('.wrap').insertBefore(newDiv, document.querySelector('#table'));

	}

	// Пересування елементу в іншу позицію
	b5.onclick = function (){
		document.querySelector('.wrap').insertBefore(document.querySelector('h1'), document.querySelector('#table'));
	}

	// Удаляння елементу
	b6.onclick= function (){
		document.querySelector('#table').removeChild(document.querySelector('h3'));
	}

}