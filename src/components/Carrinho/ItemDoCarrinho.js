import React from 'react'
import CardDoProduto from '../Produtos/CardDoProduto'




export default class ItemDoCarrinho extends React.Component {
   

  render() {
   
    return (
      <div>
            {/* <p>1x</p>
            <p>Nome do Produto</p>
            <button>Remover</button> */}
            {this.props.listaDeProdutosDoCarrinho}
      </div>
    )
  }
}
