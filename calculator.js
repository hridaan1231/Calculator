let btns = document.querySelectorAll(".btn");
let display = document.querySelector(".display");
let rst = document.querySelector(".rst");
let expression = "";

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        let tagname = btn.getAttribute("id");

        if (tagname === "plus") {
            display.innerText = "+";
            cal = plus.innerText;
        } 
        else if (tagname === "sub") {
            display.innerText = "-";
            cal = sub.innerText;
        }
        else if (tagname === "mul") {
            display.innerText = "×";
            cal = mul.innerText;
        }
        else if (tagname === "div") {
            display.innerText = "÷";
            cal = div.innerText;
        }
        else if (tagname === "one") {
            display.innerText = "1";
            cal = one.innerText;
        }
        else if (tagname === "two") {
            display.innerText = "2";
            cal = two.innerText;
        }
        else if (tagname === "three") {
            display.innerText = "3";
            cal = three.innerText;
        }
        else if (tagname === "four") {
            display.innerText = "4";
            cal = four.innerText;
        }
        else if (tagname === "five") {
            display.innerText = "5";
            cal = five.innerText;
        }
        else if (tagname === "six") {
            display.innerText = "6";
            cal = six.innerText;
        }
        else if (tagname === "seven") {
            display.innerText = "7";
            cal = sevem.innerText;
        }
        else if (tagname === "eight") {
            display.innerText = "8";
            cal = eight.innerText;
        }
        else if (tagname === "nine") {
            display.innerText = "9";
            cal = nine.innerText;
        }
        else if (tagname === "rst") {
            display.innerText = "";
        }
        else if (tagname === "di") {
            display.innerText = "/";
            cal = div.innerText;
        }
        else if (tagname === "zero") {
            display.innerText = "0";
        }

        if (tagname !== "rst" && btn.innerText !== "=") {
            expression += btn.innerText;
            display.innerText = expression;
        }

        if (btn.innerText === "=") {
            try {
                let safeExpr = expression.replace(/×/g, "*").replace(/÷/g, "/");
                let result = eval(safeExpr);
                display.innerText = result;
                expression = result.toString();
            } catch {
                display.innerText = "Error";
                expression = "";
            }
        }

        if (tagname === "rst") {
            expression = "";
            display.innerText = "";
        }
    });
});
