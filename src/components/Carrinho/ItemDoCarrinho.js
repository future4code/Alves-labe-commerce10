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
      const listaDoCarrinho = this.props.produtosCarrinho.map((produto,indice)=>{
        return <div key={indice}>
          {/* <p>{produto.id}</p> */}
          <p>{produto.name}</p>
          <button onClick={()=> this.props.deletaProduto(produto.id)} >Remover</button>
        </div>
      })
    return (
      <ContainerItemCarrinho>
       {listaDoCarrinho}
      </ContainerItemCarrinho>
    )
  }
}