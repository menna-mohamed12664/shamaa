let links= document.getElementById("links")
let userData= document.getElementById("user_info")
let user= document.getElementById("user")


if(localStorage.getItem("username")){
    links.remove()
    userData.style.display="flex"
    user.innerHTML=localStorage.getItem("username")
    user.style.textTransform= "uppercase";
}

let logOut=document.getElementById('logOut').onclick=() =>{
    localStorage.clear()
    window.location="register.html"

}