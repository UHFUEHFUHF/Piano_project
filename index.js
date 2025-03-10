const pButtons = document.querySelectorAll("button");
const btn1 = document.querySelector(".red")
const btn2 = document.querySelector(".green")
const btn3 = document.querySelector(".yellow")
const btn4 = document.querySelector(".magenta")
const btn5 = document.querySelector(".orange")
const btn6 = document.querySelector(".blue")
const btn7 = document.querySelector(".purple")

pButtons.forEach((btn)=>{
    function playsound(note){
    const myaud = new Audio(`${note}.mp3`)
    myaud.play();
}
btn.addEventListener("click",()=>{
   btn1.addEventListener("click",()=>{
    playsound(1);
})
btn2.addEventListener("click",()=>{
playsound(2)
})
btn3.addEventListener("click",()=>{
    playsound(3)
})
btn4.addEventListener("click",()=>{
    playsound(4)
})
btn5.addEventListener("click",()=>{
    playsound(5)
})
btn6.addEventListener("click",()=>{
playsound(6)
})
btn7.addEventListener("click",()=>{
})

})

const pButtons = document.querySelectorAll("button");

function playsound(note) {
    const myaud = new Audio(`${note}.mp3`);
    myaud.play();
}



// Add keyboard functionality
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "a":
            playsound(1);
            break;
        case "s":
            playsound(2);
            break;
        case "d":
            playsound(3);
            break;
        case "f":
            playsound(4);
            break;
        case "g":
            playsound(5);
            break;
        case "h":
            playsound(6);
            break;
        case "j":
            playsound(7);
            break;
    }
});




})
