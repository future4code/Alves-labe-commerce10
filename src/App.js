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
  buscaIncludes: "",
  produtosCarrinho: [],
}

adicionarProduto = () => {
  
  const produtoDoCarrinho = {
    contador: 1,
    nomeDoProduto: "amora",
  }

 const novaListaDeProdutosDoCarrinho = [produtoDoCarrinho, ...this.state.listaDeProdutosDoCarrinho]

 this.setState({listaDeProdutosDoCarrinho: novaListaDeProdutosDoCarrinho})
}

  render() {
    return (
      <ContainerPrincipal>
        <ContainerFiltros>
          <Filtros />
          
        </ContainerFiltros>
        <Produtos />
        <ContainerCarrinho>
          const listaCarrinho = this.state.listaDeProdutosDoCarrinho.map((produto) => {
          
        />
            />
          }
          <Carrinho />
        </ContainerCarrinho>
      </ContainerPrincipal>
    )
  }
}

export default App;
