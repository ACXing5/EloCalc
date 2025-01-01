console.log("Elo Calculator")
document.getElementById('p1out').readOnly = true; //set this attribute in HTML file
document.getElementById('p2out').readOnly = true; //set this attribute in HTML file
document.getElementById('change1').readOnly = true; //set this attribute in HTML file
document.getElementById('change2').readOnly = true; //set this attribute in HTML file

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
            out1.value = 1;
            out2.value = 1;
        }

    })
}
  window.onerror = function(){
      alert("PLEASE INPUT VALID EXPRESSION");
      screen1.value = "";
      screen2.value = "";
      out1.value = "";
      out2.value = "";
      console.clear();
  }
