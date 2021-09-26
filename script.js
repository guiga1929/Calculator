
const screen = document.querySelector(".screen");
screen.textContent = 0;

let buttons = document.querySelectorAll('.button');
let act_num;
let prev_num;
let result = 0;

for (let i = 0; i < buttons.length; i++) {

    buttons[i].onclick = function (){
    	
    	var text = this.textContent;
    	
        buttonPress(this, text);
    }
}

function buttonPress (button, text) {


	if(button.classList.contains("insert-number")) {


		if(screen.textContent == 0){
			screen.textContent = text;

		} else{

			screen.textContent += text;
		}

		act_num = screen.textContent;
	}



	if (text == "=") { // when '=' is clicked

	}

}

function keepNumber(number){
	prev_num = number;
}

function sum(numList){

}
