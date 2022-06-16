import React from 'react'



export default class Filtros extends React.Component {



    render() {
        
        return (
            <div>
                <h1>Filtros</h1>
                <p>Valor mínimo:</p>
                <input type="text" placeholder="Digite aqui" />
                <p>Valor máximo:</p>
                <input type="text" placeholder="Digite aqui" />
                <p>Busca por nome:</p>
                <input type="text" placeholder="Digite aqui" />
            </div>
        )
    }
}
