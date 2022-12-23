window.onload = ()=>{
    signupRequest()
}

const signupRequest = ()=>{
    const form = document.querySelector("#form");
    form.onsubmit = (e)=>{
        e.preventDefault();

        const formdata = JSON.stringify({
            username : document.querySelector("#username").value,
            password : document.querySelector("#password").value
        });
        
        const ajax = new XMLHttpRequest();
        ajax.open("POST","http://localhost:8080/api/signup",true);
        ajax.send(formdata);

      
    }
}