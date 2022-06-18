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


  state = {
    valorMinimoFilter: "",
    valorMaximoFilter: "",
    busca: "",
    produtosCarrinho: [],
    produtos: [
      {
        id: 1,
        name: "Produto 1",
        value: 100,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 2,
        name: "Produto 2",
        value: 80,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 3,
        name: "Produto 3",
        value: 50,
        imageUrl: "https://picsum.photos/200/200",
      },
    ]


  }

  adicionaInputMinimo = (event) => {
    this.setState({
      valorMinimoFilter: event.target.value
    })
  }

  adicionaInputMaximo = (event) => {
    this.setState({
      valorMaximoFilter: event.target.value
    })
  }
  adicionaInputBusca = (event) => {
    this.setState({
      busca: event.target.value
    })
  }


  adicionarProduto = () => {

    const produtoDoCarrinho = {
      id: 3,
      contador: 1,
      nomeDoProduto: "morango",
    }

    const novaListaDeProdutosDoCarrinho = [produtoDoCarrinho, ...this.state.produtosCarrinho]

    this.setState({ produtosCarrinho: novaListaDeProdutosDoCarrinho })
  }


  render() {

    return (
      <ContainerPrincipal>
        <ContainerFiltros>

          <Filtros
            produtos={this.state.produtos}
            valorMinimoFilter={this.state.valorMinimoFilter}
            valorMaximoFilter={this.state.valorMaximoFilter}
            busca={this.state.busca}
            adicionaInputMinimo={this.adicionaInputMinimo}
            adicionaInputMaximo={this.adicionaInputMaximo}
            adicionaInputBusca={this.adicionaInputBusca}

          />

        </ContainerFiltros>
        <Produtos adicionarProduto={this.adicionarProduto}
          produtos={this.state.produtos}
          valorMinimoFilter={this.state.valorMinimoFilter}
          valorMaximoFilter={this.state.valorMaximoFilter}
          busca={this.state.busca}
        />
        <ContainerCarrinho>
         <Carrinho produtosCarrinho={this.state.produtosCarrinho}/>
        </ContainerCarrinho>
      </ContainerPrincipal>
    )
  }
}

export default App;
