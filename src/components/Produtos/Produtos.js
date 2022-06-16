import React from 'react'
import CardDoProduto from "./CardDoProduto"





export default class Produtos extends React.Component {
    // state = {
    //     produtos: [
    //         {
    //             id: 1,
    //             name: "Produto 1",
    //             value: 1.99,
    //             imageUrl: "https://picsum.photos/200/200",
    //         },
    //         {
    //             id: 2,
    //             name: "Produto 2",
    //             value: 0.50,
    //             imageUrl: "https://picsum.photos/200/200",
    //         },
    //         {
    //             id: 3,
    //             name: "Produto 3",
    //             value: 1.50,
    //             imageUrl: "https://picsum.photos/200/200",
    //         },
    //     ]
    // }
    render() {
        const listaDeProdutos = this.props.produtos.map((produto) => {
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