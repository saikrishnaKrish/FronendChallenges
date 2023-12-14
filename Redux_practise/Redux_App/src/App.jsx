// import   { useState } from 'react'

import { Provider } from 'react-redux'
import './App.css'
import CounterContextProvider from './normalComponent/Context/CounterContextProvider'
import CounterWithContext from './normalComponent/CounterWithContext'
import CounterWithRedux from './reduxComponent/CounterWithRedux/CounterWithRedux'
import { store } from './reduxComponent/ReduxStore/store'
import ProductsListComp from './reduxComponent/ProductListWithRedux/ProductsListComp'
// import CounterWithRedux from './reduxComponent/CounterWithRedux'

function App() {

  return (
    <>
     {/* <CounterWithRedux/> */}
     <CounterContextProvider>
        <CounterWithContext/>
      <br/>
      <Provider store={store}>
      <CounterWithRedux/>
      <ProductsListComp/>
      </Provider>

     </CounterContextProvider>
    </>
  )
}

export default App
