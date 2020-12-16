
    <script>
    function Validate(){
        var Username=document.getElementById("User").Value;
        var passwoard=docoment.getElementById("Pass").value;
        if(username=="Admin" && passwoard=="user"){
            alert("login sucess");
            return false;
        }
        else{
            alert("login fail");
        }
    }

    </script>