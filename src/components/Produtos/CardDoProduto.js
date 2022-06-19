import React from 'react'
import styled from 'styled-components'
import ItemDoCarrinho from '../Carrinho/ItemDoCarrinho'

const ContainerCard = styled.div`
color: white;
height: 90vh;
  width: 20vw;
  padding: 0px 0px 20px 0px;
  box-shadow: 1px 1px 10px silver;
  border-radius: 9px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 30px;
  display: inline-table;
  flex-direction: column;
  text-align: center;
  align-items: justify;
  /* @media screen (min-width:390px) (max-device-width: 1200px);
    :hover {
    -webkit-transform: scale(1.1);
   
  } */
  
 `

 

export default class CardDoProduto extends React.Component {

    render() {
       
    return (
      <ContainerCard>
        <img src={this.props.imagemUrl} alt={'Imagem do produto'}/>
        <p><strong>{this.props.chamada}</strong></p>
        <p>{this.props.name}</p>
        <p>R${this.props.value},00</p>
        <p>{this.props.descricao}</p>
        <button onClick={() => this.props.adicionarProduto(this.props.teste)}>Adicionar ao carrinho</button>
    </ContainerCard>
      )
  }
}


