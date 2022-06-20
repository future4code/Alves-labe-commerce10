import React from 'react'
import ItemDoCarrinho from './ItemDoCarrinho'




export default class Carrinho extends React.Component {

    render() {
        const listaCarrinho = this.props.produtosCarrinho.map((produto,indice) => {
            return <ItemDoCarrinho
                deletaProduto={this.props.deletaProduto}
                produto = {produto}
                key={indice}
                teste={produto.id}
                name={produto.name}
                value = {produto.value}
                quantidade={produto.quantidade}
                
            />

        })
        return (
            <div>
                <h3>Carrinho</h3>
                {listaCarrinho}
                <p>Valor total: {this.props.valorTotalCarrinho}</p>
            </div>
        )
    }
}
