import React from 'react';
import styled from 'styled-components';
import hed from './hed.JPG';

const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-around;
    text-decoration: wavy overline lime;
  color: #00acee;
  align-items: top ;
  height: 50px;
  background-color: white;
  margin-right: 15px;
  align-items: 50px;
  width: 100%;
  font-size: 15px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px)
  `

  const InHeader = styled.div`
    width: 100%;
    height: 80px;
    background-color: black;
    color: white;
    
  `

export default class Header extends React.Component {

    render() {


        return (
            <InHeader>
            <h1>(C)elerita</h1>
            
              


            </InHeader>
        )
    }
}
