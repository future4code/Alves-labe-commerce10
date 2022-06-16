import React from 'react';
import styled from 'styled-components';
import Filtros from './components/Filtros/Filtros';
import Carrinho from './components/Carrinho/Carrinho';
import ItemDoCarrinho from './components/Carrinho/ItemDoCarrinho';
import Produtos from './components/Produtos/Produtos';
import CardDoProduto from './components/Produtos/CardDoProduto'

const ContainerPrincipal = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
 
`
const ContainerFiltros = styled.div`
  border: 1px solid black;
`
const ContainerCarrinho = styled.div`
 border: 1px solid black;
`


class App extends React.Component {
//  listateste = [1, 2, 5, 9, 12, 56, 78, 90, 34]

state = {
  valorMinimoFilter: "",
  valorMaximoFilter: "",
  buscaIncludes: "",
  produtosCarrinho: [{id:1,contador:1,nomeDoProduto:"abacaxi"}],
  produtos: [
    {
        id: 1,
        name: "Produto 1",
        value: 1.99,
        imageUrl: "https://picsum.photos/200/200",
    },
    {
        id: 2,
        name: "lalala",
        value: 0.50,
        imageUrl: "https://picsum.photos/200/200",
    },
    {
        id: 3,
        name: "Produto 3",
        value: 1.50,
        imageUrl: "https://picsum.photos/200/200",
    },
]


}


adicionarProduto = () => {

  console.log("Entrou na função")

  const produtoDoCarrinho = {
    id: 3,
    contador: 1,
    nomeDoProduto: this.state.teste,
  }

 const novaListaDeProdutosDoCarrinho = [produtoDoCarrinho, ...this.state.produtosCarrinho]

 this.setState({produtosCarrinho: novaListaDeProdutosDoCarrinho})
}
//  listaFiltrada = this.listateste.filter((numero) => {
//     if (numero >= 1 ) {
//         return true
//     } else {
//         return false
//     }
//    }).filter((numero) => {
//     if (numero <= 50) {
//         return true
//     } else {
//         return false
//     }
//    })
  
listaFiltrada = this.state.produtos.filter((produto) => {
  if (produto.value >= 1 ) {
      return true
  } else {
      return false
  }
 }).filter((produto) => {
  if (produto.value <= 2) {
      return true
  } else {
      return false
  }
 }).filter((produto) => {
  if (produto.name.includes('') ) {
      return true
  } else {
      return false

    }
  })


  render() {
    
    const listaCarrinho = this.state.produtosCarrinho.map((produto) => {
      return <Carrinho 

          key = {produto.id}
          contador = {produto.contador}
          nomeDoProduto = {produto.nomeDoProduto}
       />

  })

  console.log(this.listaFiltrada)

 
  
  //  console.log(listaFiltrada)
    return (
      <ContainerPrincipal>
        <ContainerFiltros>
          <Filtros produtos={this.state.produtos} />
          
        </ContainerFiltros>
        <Produtos adicionarProduto={this.adicionarProduto} produtos = {this.listaFiltrada} />
        <ContainerCarrinho>
          <h1>Carrinho</h1>
          {listaCarrinho}
        </ContainerCarrinho>
      </ContainerPrincipal>
    )
  }
}

export default App;
