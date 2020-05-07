function inputValidation(val){
    if (val =="username"){
        var x=document.getElementById("username").value;
        if(x==""){
            document.getElementById("usernameError").style.visibility="visible";

        }
        else{
            document.getElementById("usernameError").style.visibility="hidden";
        }
       
    }

    if(val== "password"){
        var y=document.getElementById("password").value;
        if(y==""){
            document.getElementById("passwordError").style.visibility="visible";

        }
        else{
            document.getElementById("passwordError").style.visibility="hidden";
        }
        
    }



}


function validation(){
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // var  submit =  document.getElementById("submit").addEventListener("click",function(event){
    //     event.preventDefault()
    // });
    

    if(username== null || username==""){
    document.getElementById("usernameError").style.visibility="visible";
    return false;
    }
    
    
    if(password == null || password=="")
    {
    document.getElementById("passwordError").style.visibility="visible";
    return false;
    }
  
    
}