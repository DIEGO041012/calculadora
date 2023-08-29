    const screen = document.getElementById("result");
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            screen.value += button.textContent;
        })
    });

