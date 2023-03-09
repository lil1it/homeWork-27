import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import {
    deleteMeal,
    getOneMeal,
    mealsAdmin,
    updateMeal,
} from '../../store/meals-admin/admin-thunk'
import ModalForm from './modal/ModalForm'

const MealsAdmin = () => {
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [price, setprice] = useState(0)
    const [searchParams, setSearchparams] = useSearchParams()
    const [change, setChange] = useState(false)
    const { meals, newMeal } = useSelector((state) => state.mealsAdmin)
    const openModalHandler = () => {
        searchParams.set('modal', 'addNewMeal')
        setSearchparams(searchParams)
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(mealsAdmin())
    }, [dispatch])

    const closeModalHAndler = () => {
        searchParams.delete('modal')
        setSearchparams(searchParams)
        setChange(false)
    }
    const deleteMealHandler = (id) => {
        dispatch(deleteMeal(id))
    }
    const editMealHandler = (id) => {
        dispatch(getOneMeal(id))
        settitle(newMeal.title)
        setdescription(newMeal.description)
        setprice(newMeal.price)
        openModalHandler()
        setChange(true)
    }
    const saveUpdateMealHandler = () => {
        const data = {
            title,
            description,
            price: +price,
            // eslint-disable-next-line no-underscore-dangle
            id: newMeal._id,
        }
        dispatch(updateMeal(data))
        setChange(false)
        closeModalHAndler()
    }
    return (
        <>
            <Container>
                <Title>Meals:</Title>
                <StyledButton onClick={openModalHandler}>
                    Add Meals
                </StyledButton>
            </Container>
            <div>
                <MealList>
                    {meals.map((item) => {
                        return (
                            // eslint-disable-next-line no-underscore-dangle, react/no-array-index-key
                            <List key={item._id}>
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                                <div>
                                    <span>$ {item.price}</span>

                                    <MealButtons
                                        onClick={() =>
                                            // eslint-disable-next-line no-underscore-dangle
                                            editMealHandler(item._id)
                                        }
                                    >
                                        Edite
                                    </MealButtons>

                                    <MealButtons
                                        onClick={() =>
                                            // eslint-disable-next-line no-underscore-dangle
                                            deleteMealHandler(item._id)
                                        }
                                    >
                                        Delete
                                    </MealButtons>
                                </div>
                            </List>
                        )
                    })}
                </MealList>
            </div>

            <ModalForm
                closeModalHAndler={closeModalHAndler}
                searchParams={searchParams}
                title={title}
                description={description}
                price={price}
                settitle={settitle}
                setdescription={setdescription}
                setprice={setprice}
                change={change}
                saveUpdateMealHandler={saveUpdateMealHandler}
            />
        </>
    )
}

export default MealsAdmin

const Container = styled('div')`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: fit-content;
`

const StyledButton = styled(Button)`
    padding: 10px 20px;
    background-color: blue;
    color: #fff;
    :hover {
        background-color: violet;
    }
`
const Title = styled('h1')`
    color: #ffffff;
`
const MealList = styled('ul')`
    margin-top: 100px;
    background-color: white;
    padding: 40px;
    border-radius: 20px;
    list-style: none;
    width: 70%;
    margin-left: 13rem;
`
const List = styled('li')`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;
    justify-content: space-between;
    h2 {
        font-size: 20px;
    }
    p {
        max-width: 300px;
    }
    span {
        font-size: 20px;
        font-weight: 700;
        margin-right: 40px;
    }
`
const MealButtons = styled(Button)`
    width: 100px;
    height: 50px;
    background-color: teal;
    color: aliceblue;
    margin-left: 10px;

    :hover {
        color: teal;
        background: #892be236;
    }
`
