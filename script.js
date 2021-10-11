
const screen = document.querySelector(".screen");
screen.textContent = 0;

let buttons = document.querySelectorAll('.button');
let act_num;
let prev_num;
let operation;
let flag = false;
let result = 0;

let entryList = [];

buttons.forEach( function (button){

    button.addEventListener("click", function (){
    	
    	var text = this.textContent;
    	
        buttonPress(this, text);
    });
});


function buttonPress (button, text) {


	if(button.classList.contains("number")) {

		if(screen.textContent == 0 || flag == true){
			screen.textContent = text;
			flag = false;

		} else{

			screen.textContent += text;
		}
	} 

	if(button.classList.contains("operation")){
	
		operation = button.textContent;
		console.log(operation);
		if(screen.textContent == 0) return

		prev_num = parseInt(screen.textContent);
		screen.textContent = "";


	}

	if(button.classList.contains("clear-entry")){

		if(screen.textContent.length == 1) {
			screen.textContent = 0;
		} else{
			screen.textContent = screen.textContent.slice(0, -1);
			console.log(screen.textContent);	
		}	

	}

	if(button.classList.contains("all-clear")){
	
		operation = undefined;
		act_num = 0;
		prev_num = 0;
		screen.textContent = 0;
	}

	if(button.classList.contains("invert-sign")){
		screen.textContent = parseFloat(screen.textContent) - 2 * parseFloat(screen.textContent);
	}

	if(button.classList.contains("equals")){

		act_num = parseInt(screen.textContent);
		console.log(prev_num, operation, act_num);

		switch(operation){
			case "+":
				result = prev_num + act_num;
				console.log(prev_num + act_num);
				break;
			case "-":
				result = prev_num - act_num;
				console.log(prev_num - act_num);
				break;
			case "X":
				result = prev_num * act_num;
				console.log(prev_num * act_num);
				break;
			case "÷":
				result = prev_num / act_num;
				console.log(prev_num / act_num);
				break;
			case "%":
				result = prev_num * (act_num/100);
				console.log(prev_num / act_num);
				break;
		}


		screen.textContent = result;
		flag = true;

	}

}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}