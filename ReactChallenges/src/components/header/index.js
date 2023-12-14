import React from 'react'
import { useCounter } from '../../machine-coding/ProductsList/context/contextProvider'


const Header = () => {

    /***
     * Here we are consuming the context
     */
    const { count } = useCounter();

    return (
        <>
         <h1> { count }</h1>
        </>
    )
}

export default Header;