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

btn1.addEventListener("click", ()=> {
    // response.style.visibility = "visible";
    response.style.background = "red";
    response.classList.add("show-response")
})
btn2.addEventListener("click", ()=> {
    // response.style.visibility = "visible";
    response.style.background = "green";
    response.classList.add("show-response")
})


//------------ Mouse Events

const mousemove = document.querySelector('.mousemove');

window.addEventListener("mousemove", (e)=> {
    console.log(e.pageX)
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
})