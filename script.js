   let listElement = document.querySelector("#app ul");
   let inputElement = document.querySelector("#app input");
   let buttonElement = document.querySelector("#app button");

   let tarefas = [];

  function renderTarefa(){
   listElement.innerHTML = "";
   tarefas.map((tarefa)=>{
let liElement = document.createElement("li");
let textElement = document.createTextNode(tarefa);
liElement.appendChild(textElement);

 let linkElement = document.createElement("a");
 linkElement.setAttribute("href", "#");
 let textli = document.createTextNode("Excluir");
linkElement.appendChild(textli);

liElement.appendChild(linkElement);
 

listElement.appendChild(liElement);
 
   });
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
}
   
   }

   buttonElement.onclick = adicionarterefas;