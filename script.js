function liberarAcesso(){
localStorage.setItem("codigo", "VIP123");

window.location.href = "login.html";
}

function validarCodigo(){
var codigo = document.getElementById("codigo").value;

if(codigo === localStorage.getItem("codigo")){
localStorage.setItem("acesso", "liberado");
window.location.href = "acesso.html";
}else{
document.getElementById("erro").innerText = "Código inválido";
}
}