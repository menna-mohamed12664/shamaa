let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let registerBtn = document.getElementById('sign_up');

 registerBtn.addEventListener('click', (e)=>{
    e.preventDefault();
     if(username.value=="" ||email.value=="" || password.value==""){
         Swal.fire({
     text: "Please Fill Data",
     background: "#111",
     color: "#fff",
     icon: "warning",
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
 

    } else{
        localStorage.setItem("username" , username.value)
        localStorage.setItem("email" , email.value)
        localStorage.setItem("password" , password.value)

         Swal.fire({
           html: '<i class="fa fa-check" style="color:#ff4d00; font-size:50px;"></i>',
            title: " تم التسجيل بنجاح",
            text: "سيتم تحويلك لصفحة تسجيل الدخول",
            background: "#111",
            color: "#fff",
            confirmButtonColor: "#ff4d00",
        })
         
        setTimeout(() => {
            
            window.location="login.html"

        },1500)

    }
})

 let show= document.getElementById('show')
show.addEventListener('click',()=>{
  password.type=show.checked? "text" : "password"
})
  
 


 


