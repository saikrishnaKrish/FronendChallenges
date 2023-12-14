import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ProductsList from '../machine-coding/ProductsList'
import Home from '../pages/Home'
import ProductCard from '../machine-coding/ProductsList/ProductCard'
import Counter from '../machine-coding/counter.js'
import ProgrammingMutltiverse from '../machine-coding/programmingMultiverse/index.jsx'
import CounterChallenge from '../machine-coding/CounterWithRange/index.jsx'
import Header from '../components/header/index.js'
const AppRoutes=()=>{

    return <>
    
        <Router>

                <Routes>
                    <Route path='/products' element={<ProductsList/>}></Route>
                    <Route path='/' exact={true} element={<Home/>}></Route>
                    <Route path='/products/:id' element={<ProductCard/>}></Route>
                     {/* <Route path='/product/'></Route> */}
                    <Route path='/counter' element={<Counter/>}></Route>
                    <Route path='/counterChallenge' element={<CounterChallenge/>}></Route>
                    <Route 
                    path='/ProgrammingMutltiverse' 
                    element={<ProgrammingMutltiverse/>}>
                    </Route>
                    <Route path='/header' element={<Header/>}></Route>
                    <Route path='/productsList' element={<ProductsList/>} />
                </Routes>
              
        </Router>
     
    
    </>
}

export default AppRoutes;