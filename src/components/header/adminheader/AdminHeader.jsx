import React from 'react'
import { AppBar, Button, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { NavLink } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { useDispatch } from 'react-redux'
import { signOut } from '../../../store/auth/auth.thunk'

const menu = [
    {
        path: 'meals',
        title: 'Meals',
    },
    {
        path: 'orders',
        title: 'Orders',
    },
]
const AdminHeader = () => {
    const dispatch = useDispatch()
    const signOutNavigateHandler = () => {
        dispatch(signOut())
    }
    return (
        <AppBar position="fixed">
            <Container>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                {menu.map((item) => (
                    <StyledNavLink key={item.path} to={item.path}>
                        {item.title}
                    </StyledNavLink>
                ))}
                <StyledButton onClick={signOutNavigateHandler} color="inherit">
                    Sign Out
                </StyledButton>
            </Container>
        </AppBar>
    )
}

export default AdminHeader

const StyledButton = styled(Button)`
    border: 2px solid blue;
    background-color: blueviolet;
    :hover {
        background-color: #d30699;
    }
`
const StyledNavLink = styled(NavLink)`
    color: white;
    font-size: 20px;
    text-decoration: none;
`
const Container = styled(Toolbar)`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 20px 50px;
`
