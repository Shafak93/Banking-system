document.getElementById('login-submit').addEventListener('click', function(){
    //Get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    

    //get user password
    const passwordField = document.getElementById('user-password')
    const userPassword = passwordField.value;
    
    //check email and password and switch to another page
    if((userEmail == 'abc@gmail.com') && (userPassword == '1234')){
        // let url = 'bank.html'
        // window.location.href(url);
        
       // another system
         window.location.href = 'bank.html'
        
    }
})

