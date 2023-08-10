const questionContainer = document.querySelector(".click-event");

const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

// questionContainer.addEventListener("click", ()=> {
//     // console.log("merci ninfini")
//     questionContainer.style.borderRadius = "20px"
// })
questionContainer.addEventListener("click", ()=> {
    questionContainer.classList.toggle("question-click");
})

btn1.addEventListener("click", (e)=> {
    // response.style.visibility = "visible";
    response.style.background = "red";
    response.classList.add("show-response")
    // console.log(e.target)
})

btn2.addEventListener("click", (e)=> {
    // response.style.visibility = "visible";
    response.style.background = "green";
    response.classList.add("show-response")

})


//------------ Mouse Events

const mousemove = document.querySelector('.mousemove');

window.addEventListener("mousemove", (e)=> {
    // console.log(e.pageX)
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
})
// ------------KEYPRESS EVENT

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key)=> {
    const audio = new Audio();
    audio.src = `${key}.mp3`
    audio.play();
}


document.addEventListener("keypress", (e)=> {
    key.textContent = e.key
    // console.log(e)

    if(e.key === "l"){
        keypressContainer.style.backgroundColor = "red";
    }else if(e.key === "g"){
        keypressContainer.style.backgroundColor = "pink";
    }

    ring(e.key)
})

////////-----------------------
//////Scroll Event

const nav = document.querySelector("nav")
// console.log(nav)

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    
    if(window.scrollY > 120) {
        nav.style.top = 0;
    }else {
        nav.style.top = "-50px"
    }
})

////------------------------------------------

