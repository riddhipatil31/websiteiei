function test() {
    // retriving data
var uid = document.getElementById("username").value;
var cls = document.getElementById("branch").value;
var email = document.getElementById("email").value;
var clg = document.getElementById("college").value;
var con = document.getElementById("contact").value;

alert (uid + cls + email + clg + con);
// storing data
var user = localStorage.setItem("uid" , uid);
var cla = localStorage.setItem("cls" , cls);
var em = localStorage.setItem("email" , email);
var col = localStorage.setItem("clg" , clg);
var no = localStorage.setItem("con" , con);


}