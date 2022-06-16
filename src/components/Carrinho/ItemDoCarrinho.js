import React from 'react'
import CardDoProduto from '../Produtos/CardDoProduto'




export default class ItemDoCarrinho extends React.Component {


  render() {

    return (
      <div>
        <p>{this.props.contador}</p>
        <p>{this.props.nomeDoProduto}</p>
        <button>Remover</button>
      </div>
    )
  }
}
