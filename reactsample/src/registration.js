
function save_data(){
    var fname = document.getElementById("firstname");
    var  lname= document.getElementById("lastname");
    //var dob = document.getElementById("dob");
    // if (document.getElementById('gender').checked) {
    //     var gender = document.getElementById("gender").value;
    //     alert(gender);
    // }
    
        // var radios = document.getElementsByName('gender');
        // console.log(radios);
        // for(var i = 0; i < radios.length; i++){
        //     radios[i].onclick = function(){
        //         document.getElementById('gender').innerText = this.value;
        //     }
        // }
   
  localStorage.setItem("firstname", fname.value); 
  localStorage.setItem("lastname", lname.value); 
 // localStorage.setItem("dob", dob.value); 
  //localStorage.setItem("gender", gender);  

}
function retrieveData(){
    var value1 = localStorage.getItem("firstname"); 
    document.getElementById("firstname").innerHTML = value1;
    var value2 = localStorage.getItem("lastname"); 
    document.getElementById("lastname").innerHTML = value2;
    // var value3 = localStorage.getItem("dob"); 
    // document.getElementById("dob").innerHTML = value3;
    // var value4 = localStorage.getItem("gender");
    // document.getElementById("gender").innerHTML = value4;
}
function loginPage(){
    window.location.href = "login.html";
}
