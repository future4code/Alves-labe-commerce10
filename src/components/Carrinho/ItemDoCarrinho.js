import React from 'react'
import styled from 'styled-components'
import CardDoProduto from '../Produtos/CardDoProduto'

const ContainerItemCarrinho = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  border: white solid 1px;
  justify-content: center;
  align-items: center;
`
const BotaoRemover = styled.button`
  width: 100px;
  height: 30px;
`

export default class ItemDoCarrinho extends React.Component {
  render() {
    return (
      <ContainerItemCarrinho>
          <p>Nome do produto: {this.props.name}</p>
          <p>Quantidade:{this.props.quantidade}</p>
          <p>Valor do Produto: {this.props.value}</p>
          <BotaoRemover onClick={() => this.props.deletaProduto(this.props.teste)} >Remover</BotaoRemover>
      </ContainerItemCarrinho>
    )
  }
}