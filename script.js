
const screen = document.querySelector(".screen");
screen.textContent = 0;

let buttons = document.querySelectorAll('.button');
let act_num = 0;
let prev_num;
let operation;
let flag = false;   // flag for not cumulating numbers on calc screen 
let p_flag = false; // flag for the dot
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

		if(p_flag == true){

			if(screen.textContent.length > 8) return;
			screen.textContent += text;

		}else {

			if(screen.textContent == 0 || flag == true){
				screen.textContent = text;
				flag = false;

			} else{
				if(screen.textContent.length > 7) return;
				screen.textContent += text;
			}
		}
	} 

	if(button.classList.contains("operation")){
	
		operation = button.textContent;

		if(screen.textContent == 0) return

		prev_num = parseFloat(screen.textContent);
		
		makeDealy();
		flag = true;
		p_flag = false;

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

	if(button.classList.contains("dot")){

		if(p_flag == true) return;

		p_flag = true;
		
		if(screen.textContent == 0 || flag == true){
			screen.textContent = "0" + text;
			flag = false;

		} else{
			if(screen.textContent.length > 7) return;
			screen.textContent += text;
		}
		
	}

	if(button.classList.contains("equals")){

		if (act_num == 0) {
			act_num = parseFloat(screen.textContent);
			alert("diferent de 0 o valor é de", act_num);
		}
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


		screen.textContent = result.toString().substring(0,8);
		prev_num = result;
		flag = true;
		p_flag = false;

	}

}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let makeDealy = () => {
	var t = screen.textContent;
	screen.textContent = "";
	setTimeout(function(){
		screen.textContent = t;
	}, 50);
};
