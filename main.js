// Declaração das variáveis globais
let form = document.getElementById("form");

let input = document.getElementById("tarefas");
let list = document.getElementById("resultado");
let message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  let inputBox = document.createElement("input");
  let element = document.createElement("div");
  element.appendChild(inputBox);
  if (input.value == "") {
    message.textContent = "Você precisa inserir algum dado antes de pesquisar";
    e.preventDefault();
  } else {
    inputBox.setAttribute("value", `${input.value}`);
    inputBox.setAttribute("readonly", true);

    list.appendChild(element);

    // Actions
    let edit = document.createElement("span");

    edit.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    console.log("aaa", edit.prop);
    // Ação de editar ou salvar os valores
    edit.addEventListener("click", () => {
      if (edit.innerText == "Salvar") {
        inputBox.setAttribute("readonly", true);
        edit.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
        edit.classList.add("pen-style");
        edit.classList.remove("edit-style");
        inputBox.classList.remove("input-edit");
      } else {
        inputBox.removeAttribute("readonly");
        inputBox.focus();
        inputBox.classList.add("input-edit");
        edit.innerHTML = `<i class="fa-solid fa-floppy-disk"></i>`;
        edit.innerText = "Salvar";
        if (edit.innerText == "Salvar") {
          edit.classList.add("edit-style");
        }
      }
    });

    let remover = document.createElement("span");
    remover.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;

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
