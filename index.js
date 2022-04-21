


class Produto {
    nome;
    preco;
    emEstoque;
    quantidade;

    constructor(nome, preco, emEstoque, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
        this.quantidade = quantidade;
    }
}

class Pedidos {
    numeroPedido;
    dataPedido;
    estaPago;
    listaProdutos;
    nomeCliente;


    constructor(numeroPedido, nomeCliente){
        this.numeroPedido = numeroPedido;
        this.dataPedido = new Date().toLocaleDateString();
        this.estaPago = false;
        this.listaProdutos = [];
        this.nomeCliente = nomeCliente;
    }

    adicionarProduto(produto) {
        this.listaProdutos.push(produto)
    }
    
     
    calcularTotal() {
        let valorTotal = 0;
        this.listaProdutos.forEach(produto => {
            valorTotal = valorTotal + (produto.preco * produto.quantidade);
        });
        return valorTotal;
    }
}

/*apartir new que é criado um objeto concreto apartir da class Produto - INSTÂNCIAS*/
const produto1 = new Produto ("Toalha", 25, true, 2);
const produto2 = new Produto ("Parafina", 15, true, 1);
const produto3 = new Produto ("Quilha", 75, true, 2);
const produto4 = new Produto ("Prancha", 3000, true, 1);
const produto5 = new Produto ("Roupa de Borracha", 2400, true, 1);

/*apartir new que é criado um objeto concreto apartir da class Pedidos - INSTÂNCIAS*/
const pedido1 = new Pedidos (202201, "Davi Borges");
const pedido2 = new Pedidos (202202, "Kelly Slater");

pedido1.adicionarProduto(produto1)
pedido1.adicionarProduto(produto5)
pedido1.adicionarProduto(produto2)

pedido2.adicionarProduto(produto3)
pedido2.adicionarProduto(produto4)

console.log(pedido2.calcularTotal())
console.log(pedido1.calcularTotal())



// function veiculo() {
//     return {
//     nome,
//     preco,
//     emEstoque,
//     quantidade,

//     buzinar: () => {},
//     }
// }