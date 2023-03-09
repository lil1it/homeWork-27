import { styled } from '@mui/material/styles'
import React from 'react'

const Orders = () => {
    return (
        <Container>
            <Title>Orders:</Title>
        </Container>
    )
}

export default Orders

const Container = styled('div')`
    width: 800px;
    height: 800px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    margin-left: 330px;
`
const Title = styled('h1')`
    color: black;
    font-size: 20px;
`
