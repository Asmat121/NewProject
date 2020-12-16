
    <script>
    function Validate(){
        var Username=document.getElementById("User").Value;
        var passwoard=docoment.getElementById("Pass").value;
        if(Username=="Admin" && passwoard=="user"){
            alert("login sucess");
            return false;
        }
        else{
            alert("login fail");
        }
    }

    </script>