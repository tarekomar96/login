let welcomeMassage = document.getElementById('welcomeMassage')
let logOutBtn = document.getElementById('logOutBtn')



if(localStorage.getItem('userName') != null){
    welcomeMassage.innerHTML = `welcome ${localStorage.getItem('userName')}`
}


function logOut(){
    //navigate to llogin page
    //remove userName from localstorage
    window.location.href='index.html'
    localStorage.removeItem('userName')
}

logOutBtn.addEventListener('click',logOut)