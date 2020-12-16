function validate(){
    var username=document.getElementById("username").Value;
    var password=document.getElementById("password").value;
    if(username=="Admin" && password=="user"){
        alert("login sucess");
    }
    else{
        alert("login fail");
    }
}