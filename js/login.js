let emailLoginInput = document.getElementById('emailLoginInput')
let passwordLoginInput = document.getElementById('passwordLoginInput')
let alertMassage = document.getElementById('alertMassage')
let loginBtn = document.getElementById('loginBtn')



let userContainer = [];
if(localStorage.getItem('Users') != null){
    userContainer = JSON.parse(localStorage.getItem('Users'))
}

function logIn(){

if(checkInputEmpty() === true){
    //alert all inputs required
    getAlertMessage('All inputs required','red')
}else{
    if(checkEmailAndPassword() === true){
        //navigate to home page
        window.location.href='home.html';
    }else{
        //alert
        getAlertMessage('Email or password not correct','red')
    }
}


}


function getAlertMessage(text,color){
    alertMassage.classList.replace('d-none','d-block') 
    alertMassage.innerHTML = text;
    alertMassage.style.color = color;
}


function checkEmailAndPassword(){
    for(let i =0; i<userContainer.length; i++){
        if(userContainer[i].email === emailLoginInput.value || userContainer[i].password === passwordLoginInput.value){
            localStorage.setItem('userName',userContainer[i].userName )
            return true
        }
    }
}


function checkInputEmpty(){
    if(emailLoginInput.value ==='' || passwordLoginInput.value === ''){
        return true;
    }else{
        return false
    }
}


loginBtn.addEventListener('click',logIn)