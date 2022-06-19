import React from 'react'
import ItemDoCarrinho from './ItemDoCarrinho'




export default class Carrinho extends React.Component {

    render() {
        const listaCarrinho = this.props.produtosCarrinho.map((produto) => {
            return <ItemDoCarrinho
      
              key={produto.id}
              contador={produto.contador}
              nomeDoProduto={produto.nomeDoProduto}
            />
      
          })
        return (
            <div>
                <h1>Carrinho</h1>
                {listaCarrinho}
            </div>
        )
    }
}
