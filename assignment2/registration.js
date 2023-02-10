function confirmPassword(){
    var pass1 = document.getElementById("password1").value;
    var pass2 = document.getElementById("password2").value;
    if (pass1.trim() == "") {  
        alert("enter valid values for password!");
        return false;

    }
    if(pass1.length<8){
        alert("password should be more than 8 characters!");
        return false;
    }
    if(pass1.length>15){
        alert("password should not be more than 10 characters!");
        return false;
    }

if (pass1!=pass2){
   alert("Password not matching, please reconfirm!");
   return false;
}
else{
    save_data();
   //document.write("registered successfully");  
    //return true;
}
}
function save_data(){
    var fname = document.getElementById("firstname");
    var  lname= document.getElementById("lastname");
    var dob = document.getElementById("dob");
    // if (document.getElementById('gender').checked) {
    //     var gender = document.getElementById("gender").value;
    //     alert(gender);
    // }
    
        var radios = document.getElementsByName('gender');
        console.log(radios);
        for(var i = 0; i < radios.length; i++){
            radios[i].onclick = function(){
                document.getElementById('gender').innerText = this.value;
            }
        }
   
  localStorage.setItem("firstname", fname.value); 
  localStorage.setItem("lastname", lname.value); 
  localStorage.setItem("dob", dob.value); 
  localStorage.setItem("gender", gender);  

}
function retrieveData(){
    var value1 = localStorage.getItem("firstname"); 
    document.getElementById("firstname").innerHTML = value1;
    var value2 = localStorage.getItem("lastname"); 
    document.getElementById("lastname").innerHTML = value2;
    var value3 = localStorage.getItem("dob"); 
    document.getElementById("dob").innerHTML = value3;
    var value4 = localStorage.getItem("gender");
    document.getElementById("gender").innerHTML = value4;
}
function loginPage(){
    window.location.href = "login.html";
}