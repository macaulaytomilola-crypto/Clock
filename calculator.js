const display = document.getElementById("display");
        const buttons =document.querySelectorAll("button")

        buttons.forEach(btn=>{
            btn.addEventListener("click", () =>{
                const value = btn.textContent;
                btn.classList.add("glow");
                setTimeout(() => btn.classList.remove("glow"),300);
                if (value ==="C"){
                    display.value="0";
                    return;
                }
                if(value === "✖"){
                    display.value= display.value.slice(0,-1);
                    return;
                }
                if(value ==="="){
                    try{
                        display.value =eval(display.value);
                    }catch{
                        display.value = "Error";
                    }
                    return;
                }
                display.value += value;
            })
        });
        document.addEventListener("keydown", (e) =>{
    const allowed = "0123456789+-*/.%";
    if(allowed.includes(e.key)){
        display.value += e.key;
    }
    if(e.key === "Enter"){
        try{    
            display.value = eval(display.value);
        }catch{display.value = "Error";

        }
    }
    if (e.key ==="Backspace"){
        display.value = display.value.slice(0,-1);
    }
    if(e.key ==="Escape"){
        display.value= "0";
    }
})