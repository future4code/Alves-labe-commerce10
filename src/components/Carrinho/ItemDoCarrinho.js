import React from 'react'
import styled from 'styled-components'
import CardDoProduto from '../Produtos/CardDoProduto'

const ContainerItemCarrinho = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
`


export default class ItemDoCarrinho extends React.Component {


  render() {

    return (
      <ContainerItemCarrinho>
        <p>{this.props.contador}</p>
        <p>{this.props.nomeDoProduto}</p>
        <button>Remover</button>
      </ContainerItemCarrinho>
    )
  }
}
