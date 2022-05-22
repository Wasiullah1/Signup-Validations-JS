document.getElementById('signup').addEventListener('click',function(){
    message=document.getElementById('showresult');
    email=document.getElementById('email').value;
           if(email.length>=7){
           console.log(email);
           }
           else{
            message.style.color = 'red';
            message.innerHTML='Invalid Email';
    
      } 
      message=document.getElementById('result');
   username=document.getElementById('username').value;
    if(username.length>=3)
    console.log(username);
    else{
        message.style.color = 'red';
        message.innerHTML='Invalid Username';
    }
    {
        message=document.getElementById('resultcontact');
            contact=document.getElementById('contact').value;
            if(contact.length>=7 && contact.length<=11){
            console.log(contact);
                        }
                        else if(contact.length == 0){
                            message.style.color = 'red';
                            message.innerHTML='Please Enter Contact Number';
                        }
            else{
                message.style.color = 'red';
                message.innerHTML='Unauthentic Contact Number';
            }
        }
        
    {
        message=document.getElementById('resultpass');
        password=document.getElementById('password').value;
        if(password.length>7){
        console.log(password);
                    }
        else{
            message.style.color = 'red';
            message.innerHTML='Weak password';
        }
    }
    {
        message=document.getElementById('resultpassagain');
        againpassword=document.getElementById('againpassword').value;
        if(againpassword == password){
        console.log(againpassword);
                    }
        else{
            message.style.color = 'red';
            message.innerHTML="Password does'nt match";
        }
    }
})
document.getElementById('loginid').addEventListener('click',function(){
   message=document.getElementById('emailresult');
   message=document.getElementById('passresult');
    entemail=document.getElementById('entemail').value;
    entpassword=document.getElementById('entpassword').value;
    if(entemail==email && entpassword==password){
        alert(('Welcome ')+ username);
    }
    else{
        message.style.background = 'red';
        message.innerHTML="Incorrect Email or Password";
    }
})
