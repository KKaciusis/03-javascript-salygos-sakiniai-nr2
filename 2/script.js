"use strict"
document.getElementById('CheckBtn').addEventListener('click', () => {

    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
    let max = Math.max(input1, input2, input3);

    document.getElementById('result').setAttribute("placeholder", `${max}`)
});