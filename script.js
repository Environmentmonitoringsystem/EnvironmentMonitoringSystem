const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value
    
    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "output.html"
    }else{
        alert("Incorrect Username and Password")
    }
})


function authentication(username,password){
    if(username === "user" && password === "user#123") {
        return true
    }else if(username === "admin" && password === "admin#123"){
        return true
    }else
    {
        return false
    }

}
