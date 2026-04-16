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
let Doadores = [];//Utilizado na linha 39

//Verificar Nome
  const VerifName = Nome.split(" ");
    if(VerifName.length === 1){
        return alert("nome inválido");
    }
//Verificar Idade
const Datas = Idade.split("/");
const AnoNasci= parseInt(Datas[0]);
const AnoAtual= new Date().getFullYear();
if(AnoAtual-AnoNasci<=15){
alert("Você tem que ter no minimo 16 anos");
} 

//Verificar Email
if(!Email.includes("@")||!Email.includes(".")){
    alert("Email invalido");
}

//Verificar Peso
if(Peso<=49) return alert("Você deve ter pelo o menos 50 kg");

//Verificar Telefone
if(isNaN(TelefoneUsuario)) return alert("Telefone invalido");

//Armazenar dados do doador
const novoDoador = {
    nome: Nome,
    email: Email,
    idade: Idade,
    peso: Peso,
    tipoSanguineo: TipoSanguineo,
    telefone: TelefoneUsuario,
    cidade: CidadeUsuario,
    estado: Estado
};
Doadores.push(novoDoador);

document.getElementById("submit").innerHTML = "Cadastro feito com sucesso!";
});
