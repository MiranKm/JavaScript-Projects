const email = document.querySelector('.email');
const password = document.querySelector('.password');
const login = document.querySelector('.login');
const loggedIn = document.querySelector('.loggedIn');

loggedIn.style.display = "none";

login.addEventListener('click', event => {

    if(localStorage){
        localStorage.clear()
        window.location.reload('http://127.0.0.1:5500/loginForm/index.html')
        event.preventDefault()

    }
    if (email.value && email.value) {
        console.log(`${email.value} ${password.value} `);
        localStorage.setItem('email', email.value)
        localStorage.setItem('password', password.value)
        window.location.reload('http://127.0.0.1:5500/loginForm/index.html')
        event.preventDefault()

    } else {
        console.log("can't be empty");
        event.preventDefault()

    }




})

window.addEventListener('load', e => {
    if (localStorage.getItem("email")) {
        loggedIn.style.display = "block";
        password.style.display = "none";
        email.style.display = "none";
        login.value = "Log out"
    }
})