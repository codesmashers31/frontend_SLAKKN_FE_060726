const logout = document.getElementById("btnlogout")

document.addEventListener("DOMContentLoaded",()=>{

const checkValid = JSON.parse(localStorage.getItem("isActive"))

if(!checkValid) {

    alert("Your Not a Valid User please login")
    window.location.href = "login.html"
    return
}

const showing = document.querySelector("#showing")


const users = JSON.parse(localStorage.getItem("isActive"))




showing.innerHTML = `<h2>Welcome ${users.name}</h2>
<p>Email: ${users.email}</p>`
})


logout.addEventListener("click",()=>{
    localStorage.removeItem("isActive")
    window.location.href = "login.html"
})