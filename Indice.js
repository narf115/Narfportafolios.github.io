const btntoggle = document.querySelector('.toggle-btn');
btntoggle.addEventListener('click',function() {
    console.log(document.getElementById('sidebar'));
document.getElementById('sidebar').classList.toggle('active');
});
function sendMail()
{


var mensaje=document.getElementById("mensaje").value;
var Empresa= document.getElementById("Empresa").value;
window.location.href="mailto:a21fravillop@inspedralbes.cat?subject="+"Practicas "+ Empresa +"&body="+mensaje;

};