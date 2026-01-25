window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    document.querySelector(".menu").classList.add("fixo");
  }
});

function filtrarProdutos() {
  const input = document.getElementById("pesquisa");
  const filtro = input.value.toLowerCase();
  const produtos = document.querySelectorAll(".produto");

  produtos.forEach(produto => {
    const textoProduto = produto.innerText.toLowerCase();

    if (textoProduto.includes(filtro)) {
      produto.style.display = "flex";
    } else {
      produto.style.display = "none";
    }
  });
}
