let inputBox = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let userInputStr = "";

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {

        let buttonValue = e.target.innerHTML;
        let lastChar = userInputStr.slice(-1);

        if (buttonValue == "=") {
            try {
                userInputStr = eval(userInputStr.replace(/%/g, '/100')).toString();
            } catch {
                userInputStr = "Error";
            }
            inputBox.value = userInputStr;
        } else if (buttonValue == "AC") {
            userInputStr = "";
            inputBox.value = "0";
        } else if (buttonValue == "DEL") {
            userInputStr = userInputStr.slice(0, -1);
            inputBox.value = userInputStr || "0";
        } else {
            if ("+-*/%".includes(buttonValue)) {
                if ("+-*/%".includes(lastChar)) {
                    userInputStr = userInputStr.slice(0, -1);
                }
                userInputStr += buttonValue;
            } else {
                if (userInputStr === "0" && buttonValue !== ".") {
                    userInputStr = buttonValue;
                } else {
                    userInputStr += buttonValue;
                }
            }
            inputBox.value = userInputStr;
        }
    });
});
