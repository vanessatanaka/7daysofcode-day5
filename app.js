// 7Daysofcode - Dia 5

// Função para classificar o produto
function fCategoria() {
  let categoria = prompt("Qual a categoria do produto?\n1 Comida\n2 Bebida\n3 Higine\n4 Limpeza");
  return categoria;
}

// Função para montar a lista de compras 
function listaCompras() {
  let compras = []
  let comprasComida = [];
  let comprasBebida = [];
  let comprasHigiene = [];
  let comprasLimpeza = [];
  
  let incluir = confirm("Você deseja incluir um item na sua lista de compras?");

  while (incluir) {
    let item = prompt("Qual item você deseja incluir?");
    
    if (item) {
      let categoria = fCategoria();

      if(categoria === '1') {
        comprasComida.push(item);
        compras.push(item);
      }
      else {
        if(categoria === '2') {
          comprasBebida.push(item);
          compras.push(item);
        }
        else {
          if(categoria === '3') {
            comprasHigiene.push(item);
            compras.push(item);
          }
          else {
            if(categoria === '4') {
              comprasLimpeza.push(item);
              compras.push(item);
            }
            else {
              fCategoria();
            }
          }
        }
      }
    }
    incluir = confirm("Você deseja incluir um item na sua lista de compras?");
  }

  if (compras.length > 0) {
    alert(`LISTA DE COMPRAS\n\n1. Comida: ${comprasComida.join(", ")}\n2. Bebida: ${comprasBebida.join(", ")}\n3. Produtos de Higiene: ${comprasHigiene.join(", ")}\n4. Produtos de Limpeza: ${comprasLimpeza.join(", ")}`);
  }
  else {
    alert("A sua lista está vazia.");
  }
}

// Montar a lista de compras
listaCompras();