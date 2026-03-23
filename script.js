const btn = document.getElementById("btn");
const body = document.querySelector("body")
const card = document.querySelector("card-header")



function darkMode(){
    body.setAttribute("data-bs-theme", "dark");
    btn.innerHTML = "Light Mode"
}
function lightMode(){
    body.setAttribute("data-bs-theme", "light");
    btn.innerHTML = "Dark Mode"
}

function toggle(){
    if(body.getAttribute("data-bs-theme") == "light"){
        darkMode()
    }else if(body.getAttribute("data-bs-theme") == "dark"){
        lightMode()
    }
}
btn.addEventListener("click", toggle)
