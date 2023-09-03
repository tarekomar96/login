let userNameInput = document.getElementById('userNameInput')
let emailInput = document.getElementById('emailInput')
let passwordInput = document.getElementById('passwordInput')
let alertMassage = document.getElementById('alertMassage')
let signUpBtn = document.getElementById('signUpBtn')
let userContainer=[];


if(localStorage.getItem('Users') != null){
userContainer =JSON.parse(localStorage.getItem('Users'))
}


function signUp(){
    let data = {
        userName:userNameInput.value,
        email:emailInput.value,
        password:passwordInput.value
    }
    if(checkInputEmpty() === true){
        //alert
        getAlertMessage('All inputs required','red')
    }else{
        if(checkEmailExist()===true){
              //alert
              getAlertMessage("Email already exists","red")
        }else{
            userContainer.push(data)
            localStorage.setItem('Users',JSON.stringify(userContainer))
            clearForm()
            getAlertMessage('success','green')
        }
    
    }
   
}


function getAlertMessage(text,color){
    alertMassage.classList.replace('d-none','d-block') 
    alertMassage.innerHTML = text;
    alertMassage.style.color = color;
}



function clearForm(){
    userNameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
}


function checkInputEmpty(){
    if(userNameInput.value === '' || emailInput.value ==='' || passwordInput.value === ''){
        return true;
    }else{
        return false
    }
}



function checkEmailExist(){
    for(let i=0; i<userContainer.length; i++){
        if(userContainer[i].email === emailInput.value){
            return true
        }
    }
}

signUpBtn.addEventListener('click',signUp)
