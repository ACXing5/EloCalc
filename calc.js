console.log("Elo Calculator")
document.getElementById('p1out').readOnly = true; //set this attribute in HTML file
document.getElementById('p2out').readOnly = true; //set this attribute in HTML file
document.getElementById('change1').readOnly = true; //set this attribute in HTML file
document.getElementById('change2').readOnly = true; //set this attribute in HTML file

let screen1 = document.getElementById('p1');
let screen2 = document.getElementById('p2');
let out1 = document.getElementById('p1out');
let out2 = document.getElementById('p2out');
let winner = -1;
buttons = document.querySelectorAll('button');
for (item of buttons) {
    item.addEventListener('click', (e) => {
        // console.log(buttonText, "has been pressed");
        buttonText = e.target.innerText;
        if (buttonText == '1') {
            winner = 1;
        } else if (buttonText == '2'){
            winner = 2;
        } else if (winner != -1 && buttonText == 'Calculate') {
            s1 = screen1.value;
            s2 = screen2.value;
            if(s1.isInteger() && s2.isInteger() && s1 >= 1000 && s2 >= 1000){
                result = calc(s1, s2, winner);
                out1.value = result[0];
                out2.value = result[1];    
            } else {
                alert("PLEASE GIVE 2 INTEGERS GREATER THAN OR EQUAL TO 1000.");
            }
        } else {
            alert("PLEASE CHOOSE A WINNER.");
        }

    })
}

const K1 = 80;
const K2 = 50
const K3 = 40;
const K4 = 32;

function calc(p1, p2, winner) {
        return 1;
}

  window.onerror = function(){
      alert("PLEASE INPUT VALID EXPRESSION");
      screen1.value = "";
      screen2.value = "";
      out1.value = "";
      out2.value = "";
      console.clear();
  }
