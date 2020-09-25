const form = document.querySelector('form');
const inputText = document.getElementById('user');
const inputPass = document.getElementById('pass');
const btn = document.getElementById('submit');
const icon = document.querySelector('div i');

// changing the icon - (showing and hiding the password)
icon.addEventListener('click', ()=>{
    if(icon.className === 'fas fa-eye-slash'){
        icon.className = 'fas fa-eye';
        inputPass.setAttribute('type', 'text');
    }else{
        icon.className = 'fas fa-eye-slash';
        inputPass.setAttribute('type', 'password');
    }
});

form.addEventListener('submit', (e)=>{
    if(inputPass.value.length <= 8){
        e.preventDefault();
        var passInfo = document.getElementById('passinfo');
        passInfo.innerHTML = 'Password needs to have at least 8 characters';
    }else if(inputText.value.length <= 4){
        e.preventDefault();
        var userInfo = document.getElementById('userinfo');
        userInfo.innerHTML = 'Username needs to be 4 characters at least';
    }else{
        passInfo.innerHTML = '';
        userInfo.innerHTML = '';
        alert('Form has been Submited.');
    }
});
// password validation.
inputPass.addEventListener('input', (e)=>{
    if(inputPass.value.length >= 8){
        e.preventDefault();
        var passInfo = document.getElementById('passinfo');
        passInfo.innerHTML = '';
    }
});

// Input Text validation.
inputText.addEventListener('input',(e)=>{
    if(inputText.value.length >= 4){
        e.preventDefault();
        var userInfo = document.getElementById('userinfo');
        userInfo.innerHTML = '';
    }
});