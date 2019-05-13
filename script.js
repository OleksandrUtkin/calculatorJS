window.onload = function() {
	let plus = document.querySelector(".plus"),
		minus = document.querySelector(".minus"),
		del = document.querySelector(".del"),
		mnozh = document.querySelector(".mnozh");

	function numbers(){
		let num1 = document.querySelector(".num1").value
		let num2 = document.querySelector(".num2").value
		if (isNaN(num1) || isNaN(num2) )
			alert ("Введите число")
		else {
			return [num1, num2]
		}
	}
	plus.addEventListener("click", function() {
			let a = numbers();
			document.querySelector(".result").value = +a[0] + +a[1];
	})
	minus.addEventListener("click", function() {
			let a = numbers();
			document.querySelector(".result").value = +a[0] - +a[1];
	})
	del.addEventListener("click", function() {
			let a = numbers();
			document.querySelector(".result").value = +a[0] / +a[1];
	})

	mnozh.addEventListener("click", function() {
			let a = numbers();
			document.querySelector(".result").value = +a[0] * +a[1];
	})
}


