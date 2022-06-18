import React from 'react'
import CardDoProduto from "./CardDoProduto"





export default class Produtos extends React.Component {
    state = {
        ordenacao: "titulo",
        ordem: 1

    }

    atualizaOrdenacao = (event) => {
        this.setState({
            ordenacao: event.target.value
        })
    }
    atualizaOrdem = (event) => {
        this.setState({
            ordem: event.target.value
        })
    }




    render() {
        let listaFiltrada = this.props.produtos.filter((produto) => {
            return produto.value >= this.props.valorMinimoFilter || this.props.valorMinimoFilter === ""
        })
            .filter((produto) => {
                return produto.value <= this.props.valorMaximoFilter || this.props.valorMaximoFilter === ""
            })
            .filter((produto) => {
                return produto.name.toLowerCase().includes(this.props.busca.toLowerCase())
            })
            .sort((a, b) => {
                switch (this.state.ordenacao) {
                    case "titulo":
                        return this.state.ordem * a.name.localeCompare(b.name)
                    default:
                        return this.state.ordem * (a.value - b.value)

                }
            })


        const listaDeProdutos = listaFiltrada.map((produto) => {
            return (
                <CardDoProduto
                    adicionarProduto={this.props.adicionarProduto}
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
                    <label for="sort"> Ordenação </label>
                    <select
                        name="sort"
                        value={this.state.ordenacao}
                        onChange={this.atualizaOrdenacao}>
                        <option value="titulo"> Título</option>
                        <option value="preco"> preco </option>
                    </select>
                    <select name="order"
                        value={this.state.ordem}
                        onChange={this.atualizaOrdem}>
                        <option value={1}> Crescente</option>
                        <option value={-1}> Decrescente </option>
                    </select>
                </div>
                <div>
                    {listaDeProdutos}
                </div>
            </div>

        )
    }
}