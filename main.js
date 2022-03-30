 // Declaração das variáveis globais
 let form = document.getElementById("form");
 let input = document.getElementById("input");
 let list = document.getElementById("result");
 let message = document.getElementById("message");

 form.addEventListener("submit", (e) => {
   let inputBox = document.createElement("input");
   let element = document.createElement("ul");
   element.appendChild(inputBox);
   if (input.value == "") {
     message.textContent =
       "Você precisa inserir algum dado antes de pesquisar";
     e.preventDefault();
   } else {
     inputBox.setAttribute("value", `${input.value}`);
     inputBox.setAttribute("readonly", true);

     list.appendChild(element);

     // Actions
     let edit = document.createElement("span");
     let remover = document.createElement("span");
     edit.textContent = "Editar";
     remover.textContent = "Deletar";

     // Ação de editar ou salvar os valores
     edit.addEventListener("click", () => {
       if (edit.textContent == "Salvar") {
         inputBox.setAttribute("readonly", true);
         edit.textContent = "Editar";
       } else {
         edit.textContent = "Salvar";
         inputBox.removeAttribute("readonly");
       }
     });
     
     // Ação de remover os elementos
     remover.addEventListener("click", () => {
       list.removeChild(element);
     });
     // Element ul
     element.append(edit);
     element.append(remover);
     message.remove();
     clear();
     e.preventDefault();
   }
 });


 // Função para resetar os valores do input
 function clear() {
   input.value = "";
 }