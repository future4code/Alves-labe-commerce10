import React from 'react'
import styled from 'styled-components'

const Infiltros = styled.div`
display: inline;
margin-top: 0px;
margin-top: 0px;
color: lime;
font-family: arial;
`

export default class Filtros extends React.Component {



    render() {
        
        return (
            <Infiltros>
                <br/>
                <h3>Filtros</h3>                               
                <n/>
                <input  placeholder="Valor Mínimo" value={this.props.valorMinimoFilter} onChange={this.props.adicionaInputMinimo} />               
                <br/>
                <input  placeholder="Valor Máximo" value={this.props.valorMaximoFilter} onChange={this.props.adicionaInputMaximo} />                
                <br/>
                <input  placeholder="Busca por nome" value={this.props.busca} onChange={this.props.adicionaInputBusca} />
                
                </Infiltros>
        )
    }
}
