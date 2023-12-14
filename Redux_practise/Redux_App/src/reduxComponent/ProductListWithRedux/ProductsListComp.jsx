
import { useDispatch, useSelector } from 'react-redux'
import { addProduct,removeProduct } from './productSlice'
import  './style.css';

const ProductsListComp = () => {
    
  const dispatch=useDispatch();
    const productsList = useSelector(state=>state.products)
    
    const handleAddProduct=()=>{
      dispatch(addProduct({id:Math.random(),
        title:'Xiomi Mobile Phone'}))
    }

    const handleRemoveProduct=(id)=>{
      dispatch(removeProduct(id))
    }

    return (
      <>
             <div>Products List  Comp {productsList.length} </div>
             <button onClick={handleAddProduct}>Add product</button>
             <button onClick={handleRemoveProduct}>Remove Product</button>
              {productsList.length && 
              productsList.map((prd)=>
               {
                return <div key={prd.id} id={prd.id} 
                className='productCard'
                >
                    <b>Title:</b>
                    <p>{prd.title}</p>  
                    <b>Description:</b>
                    <p>{prd.description}</p>
                    <b>Category:</b>
                    <p>{prd.category}</p>

                    <button onClick={()=>handleRemoveProduct(prd.id)}>Remove Product</button>
                </div>
               } 
              )
              }

    </>)
   
}

export default ProductsListComp