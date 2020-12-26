
   
    function Validate(){
        var Username=document.getElementById("User");
        var passwoard=document.getElementById("Pass");
        if(Username.value=="" || passwoard.value==""){
            alert("no blanks values are allowed");
            return false;
        }
        else{
            true;
           
        }
    }

