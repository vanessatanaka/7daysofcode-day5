// 7Daysofcode - Dia 5

// Função para montar a lista de compras 
function listaCompras() {
  let compras = [];
  let incluir = confirm("Você deseja incluir um item na sua lista de compras?");

  while (incluir) {
    let item = prompt("Qual item você deseja incluir?");
    if (item) {
      compras.push(item);
    }
    incluir = confirm("Você deseja incluir um item na sua lista de compras?");
  }

  if (compras.length > 0) {
    alert(`Lista de Compras: ${compras.join(", ")}.`);
  }
  else {
    alert("A sua lista está vazia.");
  }
}

// Montar a lista de compras
listaCompras();