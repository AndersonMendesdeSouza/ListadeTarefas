let listElement = document.querySelector("#main ul");
let inputElement = document.querySelector("#main input");
let buttonElement = document.querySelector("#main button");

let tarefas = [];

function validaTarefas(){
    listElement.innerHTML = '';
    tarefas.map((tarefa)=>{
let liElement = document.createElement("li");
let textElement = document.createTextNode(tarefa);
let linkElement = document.createElement("a");

liElement.appendChild(textElement);

listElement.appendChild(liElement);

    })
}

 function adicionarTeref(){
if(inputElement.value === ''){
    alert("Por favor digite uma tarefa!");
}else{
    let novaTarefa = inputElement.value;
tarefas.push(novaTarefa);
 
inputElement.value = '';
validaTarefas();

}


 }
 buttonElement.onclick = adicionarTeref;