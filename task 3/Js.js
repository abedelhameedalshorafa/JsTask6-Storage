registerUser=()=>{
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    const user={
        firstName,
        lastName,
        email,
        password
    };

    localStorage.setItem("user",JSON.stringify(user));
    alert("Registeration Successful");
}

loginUser=()=>{
    let email=document.getElementById("loginEmail").value;
    let password=document.getElementById("loginPassword").value;

    let stored=localStorage.getItem("user");

    if(stored){
        
        const user=JSON.parse(stored);

        if(password===user.password&&email===user.email)
        {
            alert("login sucessful");
        }
        else{
            alert("Invalid email or password. Please try again.")
        }
    }
}