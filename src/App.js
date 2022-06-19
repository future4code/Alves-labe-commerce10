import React from 'react';
import styled from 'styled-components';
import Filtros from './components/Filtros/Filtros';
import Carrinho from './components/Carrinho/Carrinho';
import ItemDoCarrinho from './components/Carrinho/ItemDoCarrinho';
import Produtos from './components/Produtos/Produtos';
import CardDoProduto from './components/Produtos/CardDoProduto';
import Header from './components/Header/Header';
import imgbg from './components/imagens/fundo.jpg';



const ContainerPrincipal = styled.div`
  background-image: url(${imgbg});
  margin: 10px;
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 0.5fr 200px 1fr;
  
`


const ContainerProdutos = styled.div`
color:white;
margin-top: 50px;
margin-top:100px;
display: grid;
grid-column: 1fr, 2fr, 1fr;
`



const ContainerFiltros = styled.div`
color: white;
width: 40px;
  text-align: center;
  height: 50px;
      margin-bottom: 30px;
  display: inline-table;
  justify-content: space-evenly;
  align-items: center ;
  
  /* @media screen (min-width:390px) (max-device-width: 1200px); */
    
`

const ContainerCarrinho = styled.div`
color: lime;
/* width: 40px; */
  text-align: top;
  /* height: 30px; */
  /* width: 40%; */
  padding: 50px;
  box-shadow: 8px 8px 8px 5px silver;
  align-items: top;
  /* :hover {
    -webkit-transform: rotate(2deg); 
    transform: rotate(2deg);
  @media screen (min-width:390px) (max-device-width: 1200px);} */
  
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
        value: 100,
        imageUrl: "https://picsum.photos/200/200",
        chamada: "Inverno em Marte",
        descricao: "inclui 3 dias de hospedagem + aerea",
        quantidade: 0,
      },

      {
        id: 2,
        name: "Pacote 2",
        value: 80,
        imageUrl: "https://picsum.photos/200/200",
        chamada: "Não perca!",
        descricao: "inclui 3 dias de hospedagem + aerea",
        quantidade: 0,

      },

      {
        id: 3,
        name: "Pacote 3",
        value: 50,
        imageUrl: "https://picsum.photos/200/200",
        chamada: "Não perca!",
        descricao: "inclui 3 dias de hospedagem + aerea",
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
        if(produto.quantidade <= 0 ){
          produto = {
            ... produto,
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
          this.setState({produtosCarrinho: this.state.produtosCarrinho})
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

        <ContainerCarrinho>
          <Carrinho 
          produtosCarrinho={this.state.produtosCarrinho} 
          deletaProduto={this.deletaProduto} 
          valorTotalCarrinho={this.state.valorTotalCarrinho} />
        </ContainerCarrinho>

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
