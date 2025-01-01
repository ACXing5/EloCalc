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
            // out1.value = something
            // out2.value = something
        }

    })
}
  window.onerror = function(){
      alert("PLEASE INPUT VALID EXPRESSION");
      screenValue = "";
      screen.value = screenValue;
      console.clear();
  }
