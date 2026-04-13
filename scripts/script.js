document.getElementById("DoacaoSangue").addEventListener("submit", function (e){
e.preventDefault();
let Nome=document.getElementById("Nome").value;
let Email=document.getElementById("Email").value;// Utilizado na linha 21
let Peso=document.getElementById("Peso").value;// Utilizado na linha 20
let TipoSanguineo=document.getElementById("TipoSanguineo").value;
let TelefoneUsuario=parseInt(document.getElementById("TelefoneUsuario").value);//Utilizado na linha 26
let CidadeUsuario=document.getElementById("CidadeUsuario").value;
let Estado=document.getElementById("Estado").value;
let Idade=document.getElementById("Idade").value;// Utilizado na linha 12
let submit=document.getElementById("submit").value;
//Verificar Idade
const Datas = Idade.split("/");
const AnoNasci= parseInt(Datas[0]);
const AnoAtual= new Date().getFullYear();
if(AnoAtual-AnoNasci<=15){
alert("Você tem que ter no minimo 16 anos");
} 

//Verificar Email
if(!Email.includes("@")||!Email.includes(".")){
    alert("Email invalido bro");
}

//Verificar Peso
if(Peso<=49) return alert("Você deve ter pelo o menos 50 kg");

//Verificar Telefone
if(isNaN(TelefoneUsuario)) return alert("Telefone invalido");

});
