import React, { useState } from 'react';
import styled from 'styled-components';
import nave from './nave.jpg'

const ContainerNave = styled.div`
display:flex;
`

export default class Nave extends React.Component {

    render() {

        return (
            <ContainerNave>
                <img src={nave}/>
            </ContainerNave>
        )
    }
}
