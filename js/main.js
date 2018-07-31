window.onload = function (){
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