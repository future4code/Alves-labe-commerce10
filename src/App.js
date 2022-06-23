import React from 'react';
import styled from 'styled-components';
import Filtros from './components/Filtros/Filtros';
import Carrinho from './components/Carrinho/Carrinho';
import Produtos from './components/Produtos/Produtos';
import Header from './components/Header/Header';
import Nave from './components/Nave/Nave';

const ContainerPrincipal = styled.div`
  background-color: white;
  margin: 10px;
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 0.5fr 2px 1fr;
   
`
const ContainerProdutos = styled.div`
color:white;
margin-top: 100px;
display: grid;
grid-column: 1fr, 2fr, 1fr;
`
const ContainerFiltros = styled.div`
color: white;
justify-content: space-around;
align-items: center
`
const ContainerCarrinho = styled.div`
color: black;
 text-align: top;
 align-items: top;
`
const adicionaInputMinimo = styled.input`
    background-color: lime;
`
class App extends React.Component {

  state = {
    valorMinimoFilter: "",
    valorMaximoFilter: "",
    busca: "",
    produtosCarrinho: [],
    valorTotalCarrinho: 0,
    produtos: [
      {
        id: 1,
        name: "Pacote 1",
        value: 1000,
        imageUrl: "https://picsum.photos/200/200",
        chamada: "Inverno em Marte",
        descricao: "Chalé + aereo",
        quantidade: 0,
      },

      {
        id: 2,
        name: "Pacote 2",
        value: 800,
        imageUrl: "https://picsum.photos/200/200",
        chamada: "Terra Plana All Inclusive",
        descricao: "Últimos dias!",
        quantidade: 0,

      },

      {
        id: 3,
        name: "Pacote 3",
        value: 500,
        imageUrl: "https://picsum.photos/200/200",
        chamada: "Não perca!",
        descricao: "Aerea + Hospedagem",
        quantidade: 0,
      },
    ]

  }

  //------------------------- FIM DOS ESTADOS!




  //------------------------- FILTROS!

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

  //------------------------- CARRINHO!

  deletaProduto = (id) => {
    this.state.produtos.map((produto) => {
      if (produto.id === id) {
        if (produto.quantidade > 0) {
          produto.quantidade = produto.quantidade - 1
          this.setState({ valorTotalCarrinho: this.state.valorTotalCarrinho - produto.value })
        }
        if (produto.quantidade <= 0) {
          let novaListaCarrinho = this.state.produtosCarrinho.filter((produto) => {
            return produto.id !== id
          })
          this.state.produtosCarrinho = novaListaCarrinho
          this.setState({ produtosCarrinho: this.state.produtosCarrinho })
          this.setState({ valorTotalCarrinho: this.state.valorTotalCarrinho - produto.value })
        }
      }
    })
  }

  adicionarProduto = (id) => {
    this.state.produtos.map((produto) => {
      if (produto.id === id) {
        if (produto.quantidade <= 0) {
          produto = {
            ...produto,
            quantidade: produto.quantidade + 1
          }
          this.state.produtosCarrinho = [produto, ...this.state.produtosCarrinho]
          this.setState({ produtosCarrinho: this.state.produtosCarrinho })
          this.setState({ valorTotalCarrinho: this.state.valorTotalCarrinho + produto.value })
          return produto
        }
        else if (produto.quantidade > 0) {
          produto = {
            ...produto,
            quantidade: produto.quantidade + 1
          }
          this.state.produtosCarrinho = [this.state.produtosCarrinho]
          this.setState({ produtosCarrinho: this.state.produtosCarrinho })
          this.setState({ valorTotalCarrinho: this.state.valorTotalCarrinho + produto.value })
          return produto
        }
      }
    })
  }

  render() {

    return (


      <ContainerPrincipal>

        <Header />

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

        <Nave />

        <ContainerCarrinho>
          <Carrinho
            produtosCarrinho={this.state.produtosCarrinho}
            deletaProduto={this.deletaProduto}
            valorTotalCarrinho={this.state.valorTotalCarrinho} />
        </ContainerCarrinho>

        <ContainerProdutos>

          <Produtos
            adicionarProduto={this.adicionarProduto}
            produtos={this.state.produtos}
            valorMinimoFilter={this.state.valorMinimoFilter}
            valorMaximoFilter={this.state.valorMaximoFilter}
            busca={this.state.busca}
          />

        </ContainerProdutos>

      </ContainerPrincipal>

    )
  }
}

export default App;
