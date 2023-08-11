let form = document.getElementById('loginform');
let resdiv = document.querySelector('#postResultDiv');
     form.addEventListener('submit',event =>{
        event.preventDefault();
        postData();
     });

async function postData(){
    let email = document.getElementById('email').value;
    let upwd = document.getElementById('upwd').value;
    const data= {'email': email, 'upwd':upwd};
    fetch("http://localhost:3000/api/login", {
        method: 'POST',
        headers: {
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data),
    })
    .then((res)=>res.json())
    .then((customer)=>{
        if(customer.valid == true){
            document.querySelector("#errormsg").classList.add("hidemessage");
            document.querySelector("#errormsg").classList.remove("showmessage");
            resdiv.dataset.result = true;
        } else {
            document.querySelector("#errormsg").classList.remove("hidemessage");
            document.querySelector("#errormsg").classList.add("showmessage");
            resdiv.dataset.result = false;
        }
        resdiv.innerHTML = "<p>" + "Post sent successfully! <br>" + "Email Address: " +customer.email + "Password: " +customer.upwd + "</br>" + "Valid User: " +customer.valid + "</p>";
    }
    ).catch((err)=>{console.log("There is an error",err)})

resetData();

}
   function resetData(){
    document.querySelector("#email").value = "";
    document.querySelector("#upwd").value = "";
   }
