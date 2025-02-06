const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function updateNameOutput() {
    const trimmedValue = input.value.trim();

    if (trimmedValue === "") {
        output.textContent = "Anonymous";
    }
    else {
        output.textContent = trimmedValue;
    }
}

input.addEventListener("input", updateNameOutput);
