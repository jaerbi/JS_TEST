function stringWork () {
		var str = document.getElementById('head').innerHTML
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

		// var numb = 10.6

		// var result = numb.toFixed(3) // 10.600
		// var result = numb.toPrecision(3) // 10.6
		// var result = numb.toPrecision(2) // 11

		// var result = parseFloat('10.23Hello World') // 10.23 перебирає і находить перше число в строці
		// var result = parseInt('10.23Hello World') // 10 перебирає строку в ціле число

		var arrNum = [1,2,10,3,4,5,6,7,8,9]
		var arrStr = ['Ser', 'Strewyu', 'heyu', 'jaerbi', 'Grytuo', 'Po', 'R']
		var arrConc = arrNum.concat(arrStr, 'hello', 'world')
		var arrSplic = arrNum.splice(2,1,arrStr)
		var arrSlice = arrNum.slice(1,3)
		arrNum.join(' - ')
		arrNum.push(1000,10001)
		arrNum.pop()
		arrNum.unshift(10001,1000)
		arrNum.shift()
		arrNum.shift()
		delete arrNum[0]
		arrNum.unshift(1,1000)
		arrNum[2] = 11
		arrNum.forEach(function(v,i,a) {
				a[i] = v + 10 + 'pr'
		})
		arrNum.splice(4,1)
		arrNum.pop()
		arrNum.pop()
		arrNum.shift()
		arrNum.shift()
		arrNum.forEach((v,i,a) => {
			return a[i] = parseFloat(v)
		})
		var arrMap = arrNum.map((v,i,a) =>{
			 v = v + i
			var res = '[' + i + '] + => ' + v

			return res
		})

		var arrEvery = arrNum.every((v,i,a) =>{
			return v > 15
		})
		var arrSome = arrNum.some((v,i,a) =>{
			return v > 15
		})
		var arrFilter = arrNum.filter((v,i,a) =>{
			return v > 15
		})

		var arrReduce = arrNum.reduce(function (x,y) {
			return x + y
		}, 100)
		var arrReduceRight = arrStr.reduceRight(function (x,y) {
			return x + y
		}, 100)
		arrNum.indexOf(3)
		var arrForIn = []
		// arrNum['hello'] = 'world'
		for (let key in arrNum) {
			arrForIn.push(key + ' '+arrNum[key] + ' => ' + key)
		}

		arrNum.forEach(function (v,i,a) {
			a[i] = v + 12
		})
		var result = arrForIn.join(' - ')
		// console.log(arrNum)

		var obj = {
			one: 'hello',
			two: 'world',
			'jaerbi boy': 'i am jaerbi',
			three: '!!!',
			four: {
				a : 'four1',
				b : 'four2',
				five : {
					fiveOne: 'hi',
					fiveTwo: 'Bro',
					fiveThree: ':) !!!'
				}
			}
		}

		var obj2 = Object.create(obj)
		obj2.one = 1

		var resultObj = 'hello'

		function loopObj (o) {
			for (key in o)  {
				if (typeof o[key] == 'object'){
					loopObj(o[key])
				} else {
					console.log(key + ' : '+ o[key])
				}
			}
		}
		
		var obj3 = {
			prop1: 10,
			prop2: 20,
			get summ () {
				return this.prop1 + this.prop2
			},
			set summ (value) {
				this.prop1 += value
			}
		}
		obj3.summ = 7

		function User (name, email, password){
			this.name = name
			this.email = email
			this.password = password
		}

		var Yura = new User ('Yuriy', 'yuriy@co.so', '123123')


		resultObj = obj3.summ
		document.getElementById('resultObj').innerHTML = resultObj

		////////////////////////////////////////////////////
		document.getElementById('result').innerHTML = result
	}

function strText () {
	var str = document.getElementById('strTextHead').innerHTML

	var result = str

	document.getElementById('strTextContent').innerHTML = result
}

window.onload = function (){
	var element = document.querySelectorAll('#nameaaa').innerHTML
	var resName = document.querySelector('#resName')
	var resNametext = document.querySelector('#resNametext')

	var a = 22,b = 1

	switch (a + b) {
		case 2:
		console.log('2')
		break
		case 3:
		console.log('3')
		break
		default:
		console.log('default')
	}
	

	// function User (name, email) {
	// 	this.name = name
	// 	this.email = email
	// }

	var addEvent_test = document.querySelector('#addEvent_test')
	addEvent_test.addEventListener('click',testFunc)
	function testFunc (e) {
		console.log(e.type)
	}

	class User {
		constructor (name, email) {
			this.name = name
			this.email = email
		}
	}

	var user1 = new User('Yura', 'as@gmail') 
	var user2 = new User('Stefco', 'we@gas') 


	var selectP = document.querySelector('.headBlock')
	var cgangeCol = document.querySelector('#changeColor')

	cgangeCol.onclick = changeClick

	function changeClick (){
		var style = selectP.style.color = '#' + Math.ceil(Math.random()* Math.pow(10,6))
	}

	var popupDiv = document.getElementById('popup')
	var popup_close = document.getElementById('popupBtn')
	var popup_open = document.getElementById('popupGo')

	popup_close.onclick = popupClose
	popup_open.onclick = popupOpen

	var tIn, tOut

	function popup() {
		popupDiv.style.display = 'flex'
		popupIn(1)
	}

	function popupClose () {
		popupOut(0)
	}

	function popupOpen () {
		popup()
	}

	function popupIn (x) {
		var opIn = (popupDiv.style.opacity) ? parseFloat(popupDiv.style.opacity) : 0

		if (opIn < x) {
			clearInterval(tOut)
			opIn += 0.05
			popupDiv.style.opacity = opIn
			tIn = setTimeout(popupIn, 30, x)
		}
	}

	function popupOut (x) {
		var opIn = (popupDiv.style.opacity) ? parseFloat(popupDiv.style.opacity) : 0

		if (opIn > x) {
			clearInterval(tIn)
			opIn -= 0.05
			popupDiv.style.opacity = opIn
			tOut = setTimeout(popupOut, 40, x)
		}

		if (popupDiv.style.opacity == x){
			popupDiv.style.display = 'none'
		}
	}

	strText()
	stringWork()


	var arr1 = [1,2,3,11,10,7,2,2,8]
	var arr2 = 2

//-------------------------------------------//-------------------------------------------//-----------------------------------------
//-------------------------------------------//-------------------------------------------//-----------------------------------------
	
	//for in - цикл де key (індех, або імя свойства)
	arr1['hello'] = 'world' // (свойство => значення)
	// for (var key in arr1) {
	// 	console.log(key + ' => ' + arr1[key])
	// }

	//indexOf - шукає в масиві елемент з вказаним значення і поветає 
								//його індех, або -1 якщо немає (з початку масиму)
	//console.log(arr1.indexOf(2))
	//lastIndexOf - (з кінця масиву)
	//console.log(arr1.lastIndexOf(2))

	//reduceRight - від більших індексів до менших
	//reduce - обєднує масив, повертаре один елемент, приймає два параметра
	//1) функція
	//2) початкове значення
	//х - початкове значення або початок масиву, а потім накоплене значення 
	//у - поточна ячейка
	var res = arr1.reduce(function (x,y) {
		return x + y
	}, 0)
	// console.log(res)


	//every - повертає true, якщо функція повертає тру для всіх елементів масиву
	var res = arr1.every(function (v,i,a) {
		return v < 5
	})
	// console.log(res)

	//some - повертає true, якщо хочаб один повертає тру 
	var res = arr1.some(function (v,i,a) {
		return v < 5
	})
	// console.log(res)

	//filter - повертає деякі елемент початкового масиву/ Функція має повертати true або false
	var res = arr1.filter(function (v,i,a) {
		return v < 5 && v > 2
	})
	// console.log(res)

	//map - повертає масив значень . функція обовязково має вертати якесь 
							//значення. повертає новий масив не міняючи
	var res = arr1.map(function (v,i,a) {
		return v * v
	})
	// console.log(res)

	//forEach - обходить елементи масиву для кожного визиває задану функцію
	//параметри
	//1) v - значення елементу масиву
	//2) i - індекс елементу масиву
	//3) a - сам масив
	arr1.forEach(function (v,i,a) {
		a[i] = v + 10 + ' hello'
	})
	// console.log(arr1)

	//delete - видаляє елемент з масивуб лишає пусту ячейку
	delete arr1[1]
	// console.log(arr1)

	//shift - видаляє з початку і повертає видалений
	arr1.shift()
	// console.log(arr1.shift())
	// console.log(arr1)

	//unshift - добавляє в початок масиву
	arr1.unshift(30,40,50)
	// console.log(arr1)

	//pop - видаляє останній елемент масиву (повертає видалений)
	arr1.pop()
	arr1.pop()
	// console.log(arr1)

	//push - добавляє до масиву в кінець масиву
	arr1.push(20,30,40,['text1','text2'])
	// console.log(arr1)

	//splice - робить вставку або видаляє елемент масиву, міняє масив (вертає видалений) 
	//параметри
	//1) показує з якого індекса буде вставка чи видалення (включно)
	//2) каже скільки елементів будуть вирізано з масиву (0 - нічого не видаляє)
	//3) вписані елементи буду ть добавлені до масиву
	arr1.splice(1,4,'hello','world')
	// console.log(arr1.splice(1,4,'hello','world'))
	// console.log(arr1)

	//slice - повертає фрагмент указаного масиву параметри початок(включнл), кінець(не включно)
	// console.log(arr1.slice(0,2))

	//concat - створює новий масив в якуму є елементи масива до якого використаний і переданих
	var arr_res = arr1.concat(13,15,17)
	var arr_res2 = arr_res.concat([14,16,18])
	//console.log(arr_res2)

	//sort - сортує і повертає відсортований масив. якщо без параметрів то поалфавіту
	arr1.sort()
//	console.log(arr1)
	arr1.sort(function(a,b) {
		return b - a
	})


	//reverse - міняє і повертає перерозпреділений масив
	arr1.reverse()
	arr2= [1,2,3]
	arr2[6] = [7]

	var k = Object.keys(arr2)
	console.log(k)
	
	for (var key in arr2) {
		 console.log(arr2[key] + 'asd' + key)
	}

	//join - Метод Обєднує всі елементи масиву в строки 
	//console.log(arr1.join(' - '))

	// if (Array.isArray(arr2)) {
	// 	console.log('true')
	// } else {
	// 	console.log('false')
	// }

	// if (2 in arr1) {
	// 	console.log('true')
	// } else {
	// 	console.log('false')
	// }
//-------------------------------------------//-------------------------------------------//-----------------------------------------
//-------------------------------------------//-------------------------------------------//-----------------------------------------

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
	}nameaaa
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

Функціональне програмування				Об'єктно орієнтована парадигма
Замикання. Карирование. Мемоизация			Поліморфізм, Наслідування, Інкапсуляція
================================================================================================
Замыкание – это функция вместе со всеми внешними переменными, которые ей доступны. 
	То есть, замыкание – это функция + внешние переменные. JavaScript Обычно, говоря «замыкание функции»,
	подразумевают не саму эту функцию, а именно внешние переменные. Иногда говорят «переменная берётся из замыкания». 
	Это означает – из внешнего объекта переменных.
   це внутрішня вункція зі всіма своїми змінними які їй доступні із зовнішньої функції
Мемоизация — збереження результатів виконання функції для запобігання повторним вираховуванням. Це один із способів оптимізації,
	застосовується для збільшення швидкості виконання комп'ютерних програм.
// простая функция, прибавляющая 10 к переданному ей числу
const add = (n) => (n + 10);
add(9);
// аналогичная функция с мемоизацией
const memoizedAdd = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = n + 10;
      cache[n] = result;
      return result;
   }}}
	Карирование					func(width, length, height) {
let funcWidth = func.bind(null, 10);			     return width * length * height;
let funcWidthLength = funcWidth.bind(null, 20);		}
let result = funcWidthLength(15);
=================================================================================================
Наслідування 
function Animal(name, voice) {				// 1) Object.setPrototypeOf
	this.name = name				// 2) Object.create
	this.voice = vocice				// 3) using new 
}						// створення прототипуів ..
Animal.prototype.say = function() { // ... }		 зараз використовують class замість функції 
const obj = Object.create(objProto)			в класі для прототипу використовують extends
const objTwo = new Animal('Dog', 'foof')

Поліморфізм це властивість яка дозволяє одне і теж ім'я (наприклад метода) використовувати для вирішення декількох зовні схожих
	але технічно різних методів. Викоистання методів успадкованих. видозмінювати їх чи доповнювати

encapsulation - По умолчанию все свойства объектов являются публичными, общедоступными, и мы к ним можем обратиться 
	из любого места программы. Но мы можем их скрыть от доступа извне, сделав свойства локальными переменными:

function User (name, age) {
    this.name = name;
    let _age = age;
    let func = () => console.log('asdas')
    this.getFunc() {
	    func();
    }
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + _age + "<br>");
	    return this
    };
    this.getAge = function() {
        return _age;
    }
    this.setAge = function(age) {
        if(typeof age === "number" && age >0 && age<110){
            _age = age;
        } else {
            console.log("Недопустимое значение");
        }
    }
}
function UserTwo(name, age, bal) {
	User.call(this, name, age);
	let originFunc = this.displayInfo
	this.displayInfo = function(age, bal) {
		document.write("Имя: " + this.name + "; возраст: " + bal + "<br>");
		originFunc.call(this, bal)
		return this
	}
}
=================================================================================================
Поднятие или hoisting — это механизм в JavaScript в котором переменные и объявления функций передвигаются вверх 
своей области видимости перед тем, как код будет выполнен. Как следствие, это означает то, что совершенно неважно
где функция или переменные были объявлены, они передвигаются вверх своей области видимости, 
вне зависимости локальная она или же глобальная.

Классом в объектно-ориентированной разработке называют шаблон/программный код, 
	предназначенный для создания объектов и методов.
AJAX (аббревиатура от «Asynchronous Javascript And Xml») – технология обращения к серверу без перезагрузки страницы.

push/pop, shift/unshift, 
splice – для добавления и удаления элементов. arr.splice(0,2,1,2,3)
join/split – для преобразования строки в массив и обратно. arr.join('') arr.split('.')
slice – копирует участок массива. 
sort – для сортировки массива. Если не передать функцию сравнения – сортирует элементы как строки.
reverse – меняет порядок элементов на обратный.
concat – объединяет массивы.
indexOf/lastIndexOf – возвращают позицию элемента в массиве (не поддерживается в IE8-).

Дополнительно:
Object.keys(obj) повертає массив властивостей об'екта.					Object.assign({}, default, obj)
const shallowCopy = Object.assign({}, obj) shallow Копія об'єкта, також дозволяє замінювати властивості Object.assign(default, obj)

forEach – для перебора массива.
filter – для фильтрации массива.
every/some – для проверки массива.
map – для трансформации массива в массив.
reduce/reduceRight – для прохода по массиву с вычислением значения.
Во многих ситуациях их использование позволяет написать код короче и понятнее, чем обычный перебор через for.

function printArgs() {
  var join = [].join; // скопируем ссылку на функцию в переменную
  // вызовем join с this=arguments,
  // этот вызов эквивалентен arguments.join(':') из примера выше
  var argStr = join.call(arguments, ':');

  alert( argStr ); // сработает и выведет 1:2:3
}
printArgs(1, 2, 3);
==================================================
let a = func(); a(); a(); a(); // count = 3
let b = func(); b(); // count = 1

func() {
  let count = 0;
  return () => {
    count++
    return count;
  }
}
==================================================
let a = {		let b = {
  name: 'Text',		  name: 'Text 2',
  age: 13,		  age: 18
}			}
func(str, num) {		func.call(a, str, num)
  this.name = str;		func.apply(b, [str, num])
  this.age = num;		let funcTwo = func.bind(a); funcTwo(str, num)
}				let funcThree = func.bind(a, str); funcThree(num)
==================================================
let arrMap = new Map([ 			arrMap.set('d', 3);   		let arrSet = new Set([ 		arrSet.add('d'); // added d
  ['a', 1],				arrMap.get('d') // 3		'a',				arrSet.add('a') // not added a
  ['b', 2],				arrMap.has('d') // true		'b',				arrSet.delete('d')
  ['c', 3],				arrMap.delete('d')		'c',				arrSet.size // 3
])					arrMap.size // 3			arrSet.forEach((value, valueAgain, set) => {}
================================================================================================
imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
 ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true
  }
}
canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
}
=================================================================================================
@ViewChild('form', {static: true}) slForm: NgForm;

 private route: ActivatedRoute, // this.route.params.subscribe
    private router: Router, // this.router.navigate(['../'], {relativeTo: this.route});
=================================================================================================
@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent?: number): number {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }
}
=================================================================================================
export class GreenDirective implements OnInit {
  // @Input() addClass = 'light-blue lighten-3';
  @Input('appGreen') addClass = 'light-blue lighten-3';
  @HostBinding('className') backgroundForText: string;
  @HostBinding('style.color') colorForText = '#333333';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    // this.elementRef.nativeElement.className = 'teal darken-2';
    // this.elementRef.nativeElement.style.color = '#f2f2f2';

    // this.renderer.addClass(this.elementRef.nativeElement, 'lighten-4');
    // this.renderer.addClass(this.elementRef.nativeElement, 'teal');
    this.backgroundForText = this.addClass;
  }
  @HostListener('mouseenter', ['$event']) mouseHover(eventData: Event): void {
    this.backgroundForText = 'teal darken-2';
    this.colorForText = '#f2f2f2';
  }
  @HostListener('mouseleave', ['$event']) mouseLeave(eventData: Event): void {
    this.backgroundForText = this.addClass;
    this.colorForText = '#333333';
 }}
 ================================================================================================
	 Компонент – основная структурная единица Angular приложения, которая «контролирует определенную часть экрана».
Если упростить то, Angular приложение это дерево компонентов, вложенных друг в друга и объединенных в модули.

Декоратор – часть синтаксиса TypeScript.
По сути это функция, которая позволяет сконфигурировать компонент. Для того чтоб класс стал компонентом,
	перед ним необходимо указать декоратор @Component и передать ему специальный конфигурационный объект.
	
Дерективи (attribute) міняють відображення або поведінку DOM елементів, встановлюють значення в атрибут HTML елемент і тд.
ngClass, ngStyle, ngModel
___________
Дерективи (structural) міняють HTML структуру в цілому, шляхом додовання чи видалення елементу на котрому прописана
ngIf, ngSwitch, ngFor
*ngFor="let item of items; index as i; first as isFirst; odd as isOdd; trackBy: trackByFn"

trackByFn(index, item) {
	return item.id;
}
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
An NgModule is defined by a class decorated with @NgModule(). The @NgModule() decorator is a function that takes a single metadata
object, whose properties describe the module. The most important properties are as follows.

declarations: The components, directives, and pipes that belong to this NgModule.

exports: The subset of declarations that should be visible and usable in the component templates of other NgModules.

imports: Other modules whose exported classes are needed by component templates declared in this NgModule.

providers: Creators of services that this NgModule contributes to the global collection of services; 
they become accessible in all parts of the app. (You can also specify providers at the component level, which is often preferred.)

bootstrap: The main application view, called the root component, which hosts all other app views. 
Only the root NgModule should set the bootstrap property.

An Attribute Directive changes the appearance or behavior of a DOM element.
Structural Directives are responsible for HTML layout. They shape or reshape the DOM's structure, typically by adding, removing,
or manipulating elements.
A Pipe takes in data as input and transforms it to a desired output.

Services are a great way to share information among classes that don't know each other. In service i can store the information
A provider is something that can create or deliver a service

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	послідовність визовів обсервеблів
	==> RXJS <==
// when all observables complete, provide the last emitted value from each as dictionary
forkJoin(
	[
	    this._paymentService.getCreditCards$(request),
	    this._paymentService.getBankAccounts$(request),
	    this._paymentService.getPaymentSettings$(request)
	]
    )
	.pipe(
	    takeUntilDestroyed(this),
	    finalize(() => {
		this.loading = false;
	    })
	)
	.subscribe((respond) => {
	    this.creditCards = respond[0];
	    this.bankAccounts = respond[1];
	    this.billingSettings = respond[2];
	});
