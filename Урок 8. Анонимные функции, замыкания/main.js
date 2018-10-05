window.onload = function () {
	var button = document.getElementById("bake");
	button.onclick = function () {
		console.log("Time to bake the cookies.");
		cookies.bake(2500);
	};

};

var cookies = {
	instructions: "Preheat oven to 350...",
	bake: function (time) {
		console.log("Baking the cookies.");
		setTimeout(done, time);
	}
};

function done() {
	alert("Cookies are ready, take them out to cool.");
	console.log("Cooling the cookies.");
	var cool = function () {
		alert("Cookies are cool, time to eat!");
	};
	setTimeout(cool, 1000);
};


if (!("a" in window)) {
	var a = 1;
}
alert(a); //undefined

var b = function a(x) {
	x && a(--x);
};
alert(a); //выведет саму функцию. а выводит ошибку, но почему=	


function a(x) {
	return x * 2;
}
var a;
alert(a); //функцию покажет а не перменную потому что перменная только обявлена но без значения

function b(x, y, a) {
	arguments[2] = 10;
	alert(a); //выведет 3 так как в выозове функции b(1, 2, 3) в а приходит 3. Но оказывается arguments[2] мы принудительно меняем аргумент 2 (и тут похоже как в массивах начинается с 0 счёт)
}
b(1, 2, 3);

function a() {
	alert(this); 
	//выведет this === object window так как в вызове стоит null
}
a.call(null);