import React from 'react'
import CardDoProduto from "./CardDoProduto"





export default class Produtos extends React.Component {
    
    render() {
        let listaFiltrada = this.props.produtos.filter((produto) => {
            return produto.value >= this.props.valorMinimoFilter || this.props.valorMinimoFilter === ""
          })
          .filter((produto) => {
            return produto.value <= this.props.valorMaximoFilter || this.props.valorMaximoFilter === ""
          })
          .filter((produto) => {
            return produto.name.includes(this.props.busca)
          })
      

        const listaDeProdutos = listaFiltrada.map((produto) => {
            return (
                <CardDoProduto
                    adicionarProduto = {this.props.adicionarProduto}
                    key={produto.id}
                    name={produto.name}
                    value={produto.value}
                    imagemUrl={produto.imageUrl}
                />
            )
        })
       

        return (
            <div>
                <div>
                    <p>Quantidade de produtos: {listaDeProdutos.length}</p>
                    <p>Ordenação</p>
                <select>
                    <option value="crescente">Crescente</option>
                    <option value="decrescente">Decrescente</option>
                </select>
                </div>
                <div>
                    {listaDeProdutos}
                </div>
            </div>
            
        )
    }
}