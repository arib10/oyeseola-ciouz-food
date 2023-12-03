const div = document.querySelector(".hamburgerAbout");
div.style.display = "none";
const error = document.querySelector(".food-error").innerHTML
error.style.display = "none";

		
/*let menuPrice = document.querySelector(".menu-price").innerHTML;
let foodPrice = document.querySelector(".food-price");
let quantity = document.querySelector(".food-quantity").value;
let error = document.querySelector(".error").innerHTML;
*/	
function foodPrice() {
		
	let menuPrice = document.querySelector(".menu-price").innerHTML;
	let foodPrice = document.querySelector(".food-price");
	let quantityValue = document.querySelector(".food-quantity").value;
	let quantity = document.querySelector(".food-quantity");
	const error = document.querySelector(".food-error").innerHTML;

 	foodPrice.value = menuPrice * quantityValue;
	
	
if (quantityValue <= 0) {
	 quantity.style.border = "1px solid red";
	 foodPrice.value = menuPrice; 
	 error.style.display == "inline-block";
} 
 else {
	quantity.style.border = "none";
}
}

function navBar() {
	const div = document.querySelector(".hamburgerAbout");
	const hamburger = document.querySelector(".hamburger");
	if (div.style.display == "none") {
		div.style.display = "inline-block";
		hamburger.style.display = "inline";
		hamburger.style.opacity = "0.5";
		} else if (div.style.display = "inline-block"){
		 div.style.display = "none";
		 hamburger.style.opacity = "1"
		}
		else {
			div.style.display = "none"
		}		 
}


