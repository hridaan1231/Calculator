let btns = document.querySelectorAll(".btn");
let display = document.querySelector(".display");
let rst = document.querySelector(".rst");
let expression = "";

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        let tagname = btn.getAttribute("id");

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
