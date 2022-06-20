import React from 'react'
import styled from 'styled-components'

const Infiltros = styled.div`
display: inline-flex;
align-items: center;
margin-left: 80px;
width: 100%;
`


export default class Filtros extends React.Component {



    render() {

        return (
            <Infiltros>
                <input placeholder="Valor Mínimo" value={this.props.valorMinimoFilter} onChange={this.props.adicionaInputMinimo} />
                <br />
                <input placeholder="Valor Máximo" value={this.props.valorMaximoFilter} onChange={this.props.adicionaInputMaximo} />
                <br />
                <input placeholder="Busca por nome" value={this.props.busca} onChange={this.props.adicionaInputBusca} />

            </Infiltros>
        )
    }
}
