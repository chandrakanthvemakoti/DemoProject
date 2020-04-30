function inputValidation(val){
    if (val =="username"){
        var x=document.getElementById("username").value;
        if(x==""){
            document.getElementById("usernameError").style.display="block";

        }
        else{
            document.getElementById("usernameError").style.display="none";
        }
    }

    if(val== "password"){
        var y=document.getElementById("password").value;
        if(y==""){
            document.getElementById("passwordError").style.display="block";

        }
        else{
            document.getElementById("passwordError").style.display="none"
        }
    }



}


function validation(){
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var form = document.getElementById("form").addEventListener("click",function(event){
        event.preventDefault()
    });
    

    if(username== null || username=="")
    document.getElementById("usernameError").style.display="block";

    if(password == null || password=="")
    document.getElementById("passwordError").style.display="block";

    if(username !=="" && password !== "")
    {
        alert("Login successful");
    }
    
}