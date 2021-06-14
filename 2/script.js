
"use strict"
document.getElementById('CheckBtn').addEventListener('click', () => {
    document.getElementById('result').value = Math.max(
        document.getElementById("input1").value,
        document.getElementById("input2").value,
        document.getElementById("input3").value
    );;
});
