
function add(){
            let a=Number(document.getElementById("num1").value);
            let b=Number(document.getElementById("num2").value);
            document.getElementById("result").innerHTML="Result:" +(a+b);

        }
        function subtract(){
        
            let a=Number(document.getElementById("num1").value);
            let b=Number(document.getElementById("num2").value);
            document.getElementById("result").innerHTML="Result:" +(a-b);
        }
        function multiple(){
        
            let a=Number(document.getElementById("num1").value);
            let b=Number(document.getElementById("num2").value);
            document.getElementById("result").innerHTML="Result:" +(a*b);
        }
        function divide()
        {
        
            let a=Number(document.getElementById("num1").value);
            let b=Number(document.getElementById("num2").value);
            if(b===0)
            {
               document.getElementById("result").innerHTML="Result:" + "Not Divide by Zero";
            }
            else
            {
               document.getElementById("result").innerHTML="Result:" +(a/b);
            }
            
        }
    