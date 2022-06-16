import React from 'react'
import ItemDoCarrinho from '../Carrinho/ItemDoCarrinho'


export default class CardDoProduto extends React.Component {
    state={
        listaDeProdutosDoCarrinho:[]
    }


    

    render() {
        const listaCarrinho = this.state.listaDeProdutosDoCarrinho.map((produto)=>{
            return(
                <ItemDoCarrinho
                    listaDeProdutosDoCarrinho={produto.listaDeProdutosDoCarrinho}
                />
            )
        })
    return (
      <div>
        <img src={this.props.imagemUrl} alt={'Imagem do produto'}/>
        <p>{this.props.name}</p>
        <p>{this.props.value}</p>
        <button onClick={this.adicionarProduto}>Adicionar ao carrinho</button>
    </div>
    )
  }
}