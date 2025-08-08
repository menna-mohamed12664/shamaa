let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let loginBtn = document.getElementById('sign_in');

let getUserName=localStorage.getItem("username")
let getPassWord=localStorage.getItem("password")

loginBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    if(username.value=="" ||password.value==""){
    Swal.fire({
     text: "Please Fill Data",
     icon: "warning",
     background: "#111",
      color: "#fff",
    confirmButtonColor: "#ff4d00",
   showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  }
});
    }else{
        if(getUserName.trim()=== username.value.trim () && getPassWord===password.value){
            setTimeout(() => {
                window.location="index.html"
            },1000)
        }else{
     Swal.fire({
     text: "Username Or PassWord Is Wrong!",
     icon: "warning",
     background: "#111",
      color: "#fff",
    confirmButtonColor: "#ff4d00",
   showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  }
});

        }

    }
})

 let show= document.getElementById('show')
show.addEventListener('click',()=>{
  password.type=show.checked? "text" : "password"
})