var header__bag = document.querySelector(".header__bag");
var bag = document.querySelector(".bag");
var bag__close = document.querySelector(".bag__close");

header__bag.addEventListener("click", bagVisible);
bag__close.addEventListener("click", bagVisible);

function bagVisible(){
	bag.classList.toggle("bag_visible");
}

var store_app = angular.module("store_app", []);