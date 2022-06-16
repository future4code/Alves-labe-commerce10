import React from 'react'
import ItemDoCarrinho from './ItemDoCarrinho'



export default class Carrinho extends React.Component {

    render() {
        
        return (
            <div>
                <ItemDoCarrinho contador={this.props.contador} nomeDoProduto={this.props.nomeDoProduto}/>
            </div>
        )
    }
}
