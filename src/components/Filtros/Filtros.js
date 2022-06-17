import React from 'react'



export default class Filtros extends React.Component {



    render() {
        
        return (
            <div>
                <h1>Filtros</h1>
                                 
                <p>Valor mínimo:</p>
                <input  placeholder="Digite aqui" value={this.props.valorMinimoFilter} onChange={this.props.adicionaInputMinimo} />
                
                <p>Valor máximo:</p>
                <input  placeholder="Digite aqui" value={this.props.valorMaximoFilter} onChange={this.props.adicionaInputMaximo} />
                
                <p>Busca por nome:</p>
                <input  placeholder="Digite aqui" value={this.props.busca} onChange={this.props.adicionaInputBusca} />
                
                </div>
        )
    }
}
