console.log("Elo Calculator")
document.getElementById('p1out').readOnly = true; //set this attribute in Html file
document.getElementById('p2out').readOnly = true; //set this attribute in Html file

let screen1 = document.getElementById('p1');
let screen2 = document.getElementById('p2');
let out1 = document.getElementById('p1out');
let out2 = document.getElementById('p2out');
buttons = document.querySelectorAll('button');
for (item of buttons) {
    item.addEventListener('click', (e) => {
        // console.log(buttonText, "has been pressed");
        buttonText = e.target.innerText;
        if (buttonText == 'Calculate') {
            screen1.value = eval(screenValue);
        }

    })
}

document.addEventListener("keydown", function(event) {
    console.log(event.which);
    if(event.shiftKey==57){
        event.key = '(';
    }
    else if(event.shiftKey==48){
        event.key = ')';
    }
    else if(event.shiftKey==53){
        event.key = '%';
    }
    if(event.keyCode==88){
        screenValue += '*';
        screen.value = screenValue;
    }
    if(event.key<=9 || event.key=='+' || event.key=='-' || event.key=='*' || event.key=='.' || event.key=='/' || event.key=='%' || event.key=='(' || event.key==')'){
        screenValue += event.key;
        screen.value = screenValue;
    }
    if(event.keyCode == 13 || event.keyCode == 187)
    {
        screen.value = eval(screenValue);
    }
    else if(event.keyCode == 46){
        screenValue = "";
        screen.value = screenValue;
        console.clear();
    }
    else if(event.keyCode == 8){
        screenValue = screenValue.slice(0, -1);
        screen.value = screenValue;
    }
    else if(event.keyCode == 67){
        screenValue = "";
        screen.value = screenValue;
        console.clear();
    }
    else if(event.keyCode == 82){
        location.reload();
    }
  })

  window.onerror = function(){
      alert("PLEASE INPUT VALID EXPRESSION");
      screenValue = "";
      screen.value = screenValue;
      console.clear();
  }
