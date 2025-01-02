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
            alert(1 was pressed);
        } else if (buttonText == '2'){
            winner = 2;
            alert(2 was pressed);
        } else if (winner != -1 && buttonText == 'Calculate') {
            s1 = screen1.value;
            s2 = screen2.value;
            if(s1.isInteger() && s2.isInteger() && s1 >= 1000 && s2 >= 1000){
                result = calc(parseInt(s1), parseInt(s2), winner);
                out1.value = result[0] + " +(" + result[1] + ")";
                out2.value = result[2] + " +(" + result[3] + ")";    
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
    qA = Math.pow(10, p1/400);
    qB = Math.pow(10, p2/400);
    eA = qA / (qA + qB);
    eB = qB / (qA + qB);

    let multA = 1, multB = 1;
    if (winner == 1) {
        sA = 1;
        sB = 0;
        if (p2 < 1100) {
            multB = 0.5;
        }
    } else if (winner == 2) {
        sA = 0;
        sB = 1;
        if (p1 < 1100) {
            multA = 0.5;
        }
    } else {
        sA = 0.5;
        sB = 0.5;
    }

    if (p1 < 1100) {
        kA = K1;
    } else if (p1 < 1300) {
        kA = K2;
    } else if (p1 < 1600) {
        kA = K3;
    } else {
        kA = K4;
    }

    if (p2 < 1100) {
        kB = K1;
    } else if (p2 < 1300) {
        kB = K2;
    } else if (p2 < 1600) {
        kB = K3;
    } else {
        kB = K4;
    }

    changeA = kA * (sA - eA) * multA;
    changeB = kB * (sB - eB) * multB;
    rA = Math.round(p1 + changeA);
    rB = Math.round(p2 + changeB);
    cA = Math.round(changeA);
    cB = Math.round(changeB);
    if (rA < 1000) {
        rA = 1000;
        cA = Math.min(0, rA-p1);
    }
    if (rB < 1000) {
        rB = 1000;
        cB = Math.min(0, rB-p2);
    }
    return [rA, cA, rB, cB];
}

  window.onerror = function(){
      alert("PLEASE INPUT VALID EXPRESSION");
      screen1.value = "";
      screen2.value = "";
      out1.value = "";
      out2.value = "";
      console.clear();
  }
