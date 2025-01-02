console.log("Elo Calculator")

document.getElementById('answer').readOnly = true; //set this attribute in HTML file
let screen = document.getElementById('answer');
let outscreen = document.getElementById('out');
buttons = document.querySelectorAll('button');
let screenValue = '';
let outValue = '';
for (item of buttons) {
    item.addEventListener("click", (e) => {
        // console.log(buttonText, "has been pressed");
        buttonText = e.target.innerText;
        if (buttonText == "1 Won") {
            buttonText = "W1";
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == "2 Won") {
            buttonText = "W2";
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == "C") {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == "CE") {
            let s_len = screen.value.length;
            if (s_len >= 2) {
                let last_2 = screen.value.substring(s_len - 2, s_len);
                if (last_2 == "W1" || last_2 == "W2" || last_2 == "VS") {
                    screenValue = screen.value.substring(0, s_len - 2);
                } else {
                    screenValue = screen.value.substring(0, s_len - 1);
                }
            } else {
                screenValue = screen.value.substring(0, s_len - 1);
            }
            screen.value = screenValue;
        }
        else if (buttonText == "=") {
            let s_len = screenValue.length;
            let winner = screenValue.substring(s_len - 2, s_len);
            let elos = (screenValue.substring(0, s_len - 2)).split("VS");
            try {
                let elo1 = parseInt(elos[0]);
                let elo2 = parseInt(elos[1]);
                if(winner == "W1" || winner == "W2") {
                    outValue = calc(elo1, elo2, winner.substring(1));
                    outscreen.value = outValue;
                } else {
                    alert("INVALID INPUT! SHOULD BE: [elo1]VS[elo2][W1 or W2]. \nEx: 1000VS1250W2");
                }
            } catch(err) {
                alert("INVALID INPUT! SHOULD BE: [elo1]VS[elo2][W1 or W2]. \nEx: 1000VS1250W2");
            }
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
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
    if (winner == '1') {
        sA = 1;
        sB = 0;
        if (p2 < 1100) {
            multB = 0.5;
        }
    } else if (winner == '2') {
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
    
    // CHANGE IF MINIMUM IS 1000 OR NOT
    min_on = false;
    if (min_on) {
        if (rA < 1000) {
            rA = 1000;
            cA = Math.min(0, rA-p1);
        }
        if (rB < 1000) {
            rB = 1000;
            cB = Math.min(0, rB-p2);
        }
    }
    out1 = rA + " +(" + cA + ")";
    out2 = rB + " +(" + cB + ")";
    return out1 + ", " + out2;
}

document.addEventListener("keydown", function(event) {
    console.log(event.which);
    if(event.key <= 9) {
        screenValue += event.key;
        screen.value = screenValue;
    }
    else if(event.keyCode == 13 || event.keyCode == 187)
    {
        let s_len = screen.value.length;
        winner = screen.value.substring(s_len - 2, s_len);
        elos = (screen.value.substring(0, s_len - 2)).split("VS");
        try {
            elo1 = parseInt(elos[0]);
            elo2 = parseInt(elos[1]);
            if(winner == "W1" || winner == "W2") {
                outValue = calc(elo1, elo2, winner.substring(1));
                outscreen.value = outValue;
            } else {
                alert("INVALID INPUT! SHOULD BE: [elo1]VS[elo2][W1 or W2]. \nEx: 1000VS1250W2");
            }
        } catch(err) {
            alert("INVALID INPUT! SHOULD BE: [elo1]VS[elo2][W1 or W2]. \nEx: 1000VS1250W2");
        }
    }
    else if(event.keyCode == 46 || event.keyCode == 67){
        screenValue = "";
        screen.value = screenValue;
        console.clear();
    }
    else if(event.keyCode == 8){
        alert("Backspace");
        let s_len = screen.value.length;
        if (s_len >= 2) {
            let last_2 = screen.value.substring(s_len - 2, s_len);
            if (last_2 == "W1" || last_2 == "W2" || last_2 == "VS") {
                screenValue = screen.value.substring(0, s_len - 2);
            } else {
                screenValue = screen.value.substring(0, s_len - 1);
            }
        } else {
            screenValue = screen.value.substring(0, s_len - 1);
        }
        screen.value = screenValue;
    }
  })

  // window.onerror = function(){
  //     alert("3INVALID INPUT! SHOULD BE: [elo1]VS[elo2][W1 or W2]. \nEx: 1000VS1250W2");
  //     console.clear();
  // }
