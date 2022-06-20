import React from 'react';
import styled from 'styled-components';


const ContainerHeader = styled.div`
  display: inline-flex;
  justify-content: top;
  color: white;
  align-items: center ;
  background-color: black;
  width: 70%;
  height: 80px;
  
    `

  const InHeader = styled.div`
    width: 70%;
    height: 100px;
    background-color: black;
    color: white;  
    display: flex
    
        
  `

export default class Header extends React.Component {

    render() {


        return (
            <InHeader>
            <h1><hr></hr> (C)elerita</h1>
            <br/>
            <h4><i>Viagens espaciais</i></h4>
             </InHeader>
        )
    }
}
/* background-image: url(${imgbg}); */