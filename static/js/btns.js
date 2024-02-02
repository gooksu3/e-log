const header=document.querySelector("header");
const btnInput=header.querySelector("button");
const divInputWindow=document.querySelector(".transparent_bg");
const closeInputWindowBtn=document.querySelector(".close_window_input_info")
const input_ship_info=document.querySelector("#input_ship_info")
const input_whole=document.querySelector("#input_whole")

function openWindow(event){
    divInputWindow.classList.remove("none");
    input_whole.focus()
}
function closeInputWindow(event){
    divInputWindow.classList.add("none");
}
// function preventRedirect(event){
//     event.preventDefault();
//     input_whole.focus()
// }


btnInput.addEventListener("click",openWindow);
closeInputWindowBtn.addEventListener("click",closeInputWindow);
input_ship_info.addEventListener("submit",preventRedirect);

