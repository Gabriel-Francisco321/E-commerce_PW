// ========== DADOS DOS PRODUTOS ==========
products = [
    {
        id: 1,
        name: "Camiseta Básica Azul",
        category: "camisetas",
        price: 59.9,
        image: "../images/camiseta-azul.png",
        description: "Camiseta 100% algodão confortável",
    },
    {
        id: 2,
        name: "Camiseta Estampada Preta",
        category: "camisetas",
        price: 79.9,
        image: "../images/camiseta-preta.png",
        description: "Camiseta com estampa em relevo",
    },
    {
        id: 3,
        name: "Camiseta Premium Branca",
        category: "camisetas",
        price: 89.9,
        image: "../images/camiseta-branca.png",
        description: "Camiseta premium com acabamento fino",
    },
    {
        id: 4,
        name: "Calça Jeans Azul",
        category: "calcas",
        price: 129.9,
        image: "../images/calca-jeans.png",
        description: "Calça jeans clássica confortável",
    },
    {
        id: 5,
        name: "Calça Preta Slim",
        category: "calcas",
        price: 139.9,
        image: "../images/calca-preta.png",
        description: "Calça slim fit em tons escuros",
    },
    {
        id: 6,
        name: "Calça Cargo Cáqui",
        category: "calcas",
        price: 149.9,
        image: "../images/calca-cargo.png",
        description: "Calça cargo com múltiplos bolsos",
    },
    {
        id: 7,
        name: "Boné Ajustável Preto",
        category: "acessorios",
        price: 39.9,
        image: "../images/bone.png",
        description: "Boné clássico com ajuste traseiro",
    },
    {
        id: 8,
        name: "Mochila Urbana Preta",
        category: "acessorios",
        price: 169.9,
        image: "../images/mochila.png",
        description: "Mochila resistente para uso diário",
    },
    {
        id: 9,
        name: "Óculos de Sol Premium",
        category: "acessorios",
        price: 199.9,
        image: "../images/oculos.png",
        description: "Óculos de proteção UV total",
    },
    {
        id: 4,
        name: "Calça Jeans Azul",
        category: "calcas",
        price: 129.9,
        image: "../images/calca-jeans.png",
        description: "Calça jeans clássica confortável",
    },
    {
        id: 5,
        name: "Calça Preta Slim",
        category: "calcas",
        price: 139.9,
        image: "../images/calca-preta.png",
        description: "Calça slim fit em tons escuros",
    },
    {
        id: 6,
        name: "Calça Cargo Cáqui",
        category: "calcas",
        price: 149.9,
        image: "../images/calca-cargo.png",
        description: "Calça cargo com múltiplos bolsos",
    },
    {
        id: 7,
        name: "Boné Ajustável Preto",
        category: "acessorios",
        price: 39.9,
        image: "../images/bone.png",
        description: "Boné clássico com ajuste traseiro",
    },
    {
        id: 8,
        name: "Mochila Urbana Preta",
        category: "acessorios",
        price: 169.9,
        image: "../images/mochila.png",
        description: "Mochila resistente para uso diário",
    },
    {
        id: 9,
        name: "Óculos de Sol Premium",
        category: "acessorios",
        price: 199.9,
        image: "../images/oculos.png",
        description: "Óculos de proteção UV total",
    }
];



// ======= ELEMENTOS DO DOM ========
const productsGrid = document.getElementById("productsGrid");
const yearSpan = document.getElementById("year");

// ======== INICIALIZAÇÃ0 ===========
document.addEventListener("DOMContentLoaded", () => {
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    if (productsGrid) {
        renderProducts();
    }
});



function paginateProducts(produtos) {

    if (produtos.lenth) {

    }

}

function renderProducts() {
    productsGrid.innerHTML = products
        .map(
            (product) =>
                `<div class="produto-grid">
                    <img 
                    src="${product.image}" 
                    alt="${product.name}">

                    <div>
                        <span class="categoria-nome">${product.category}</span>
                        <h4 class="card-title">${product.name}</h4>
                        <p class="p-standard descricao">${product.description}</p>
                        <div class="compra">
                            <span class="preco">AOA ${product.price}</span>
                            <button class="btn btn-primary">+ Carrinho</button>
                        </div>
                    </div>
                </div>`,
        )
        .join("");
}
