// 7Daysofcode - Dia 5 - Melhorias do ChatGPT

// Objeto para organizar as categorias
const categorias = {
  1: "Comida",
  2: "Bebida",
  3: "Higiene",
  4: "Limpeza"
};

// Função para obter a categoria do produto
function obterCategoria() {
  let categoria;
  do {
    categoria = prompt("Qual a categoria do produto?\n1. Comida\n2. Bebida\n3. Higiene\n4. Limpeza");
  } while (!categorias[categoria]); // Garante que a entrada seja válida
  return categoria;
}

// Função para montar a lista de compras
function listaCompras() {
  const compras = {
    Comida: [],
    Bebida: [],
    Higiene: [],
    Limpeza: []
  };
  let incluir = confirm("Você deseja incluir um item na sua lista de compras?");
  while (incluir) {
    let item = prompt("Qual item você deseja incluir?").trim();
    if (item) {
      let categoria = obterCategoria();
      compras[categorias[categoria]].push(item);
    } else {
      alert("Nome do item inválido. Tente novamente.");
    }
    incluir = confirm("Você deseja incluir outro item?");
  }
  if (Object.values(compras).some(arr => arr.length > 0)) {
    let listaFormatada = "LISTA DE COMPRAS:\n\n";
    
    for (const [categoria, itens] of Object.entries(compras)) {
      if (itens.length > 0) {
        listaFormatada += `- ${categoria}: ${itens.join(", ")}\n`;
      }
    }
    alert(listaFormatada);
  } else {
    alert("A sua lista está vazia.");
  }
}

// Inicia o programa
listaCompras();
