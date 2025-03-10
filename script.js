   let listElement = document.querySelector("#app ul");
   let inputElement = document.querySelector("#app input");
   let buttonElement = document.querySelector("#app button");

   let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

   renderTarefa();

  function renderTarefa(){
   listElement.innerHTML = "";
   tarefas.map((tarefa)=>{
let liElement = document.createElement("li");
let textElement = document.createTextNode(tarefa);
liElement.appendChild(textElement);

let linkElement = document.createElement("a");
linkElement.setAttribute("href", "#");
let textLink = document.createTextNode("x");

let posicao = tarefas.indexOf(tarefa);

linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`);
 

linkElement.appendChild(textLink);


liElement.appendChild(linkElement);

listElement.appendChild(liElement);
 
})
  }

   
   function adicionarterefas(){
if(inputElement.value === ''){
   alert("Por favor, digite uma tarefa!");
return false;
}else{
   let novaTerefa = inputElement.value;
   tarefas.push(novaTerefa);
   inputElement.value = '';

 renderTarefa();
 salvarDados();

}
   }
   buttonElement.onclick = adicionarterefas;

   function deletarTarefa(posicao){
     tarefas.splice(posicao, 1);
     renderTarefa();
   salvarDados();
   }
  

function salvarDados(){
   localStorage.setItem("@listaTarefas", JSON.stringify(tarefas));
}
 

