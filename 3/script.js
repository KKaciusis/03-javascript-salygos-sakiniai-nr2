
"use strict"
document.getElementById('CheckBtn').addEventListener('click', () => {
        let input1 = document.getElementById("input1").value;
        let input2 = document.getElementById("input2").value;
        let input3 = document.getElementById("input3").value;
        if ( input1 + input2 > input3 && input1 + input3 > input2  && input2 + input3 > input1){
            document.getElementById("result").value = ("Triangle is possible")
        }
            else {
                document.getElementById("result").value = ("Bruh")
            }
});
