window.onload = function (){

	function fact(n) {
		if (n<=1) {
			return 1
		}

		return n * (fact(n-1))
	}

	console.log(fact(5))

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