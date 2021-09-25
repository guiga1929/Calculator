
const screen = document.querySelector(".screen");
let buttons = document.querySelectorAll('.button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (){
    	var text = this.textContent;
        buttonPress(this, text);
    }
}

function buttonPress (button, text) {

	if(button.classList.contains("insert-number")) {
		screen.textContent += text;
	}
	
}
