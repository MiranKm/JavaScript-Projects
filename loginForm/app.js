const email= document.querySelector('.email');
const password= document.querySelector('.password');
const login= document.querySelector('.login');


login.addEventListener('click', event=>{
    if(email.value && email.value){
        console.log(`${email.value} ${password.value} `);
    }
    else{
        console.log("can't be empty");
    }
})

